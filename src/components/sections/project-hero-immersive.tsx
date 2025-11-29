"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "motion/react";
import { Project } from "@/lib/projects";
import Link from "next/link";

interface ProjectHeroImmersiveProps {
  project: Project;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    isDark: boolean;
  };
}

export const ProjectHeroImmersive = ({
  project,
  theme,
}: ProjectHeroImmersiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasOpacity, setCanvasOpacity] = useState(0);
  const { scrollY } = useScroll();

  // Parallax for text
  const titleY = useTransform(scrollY, [0, 500], [0, 150]);
  const metaY = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Important: Use alpha: true for transparent background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Explicitly set clear color to transparent
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    const colorStart = new THREE.Color(theme.primary);
    const colorEnd = new THREE.Color(theme.secondary);

    // Shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        iColorStart: { value: colorStart },
        iColorEnd: { value: colorEnd },
        iIsDark: { value: theme.isDark ? 1.0 : 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        uniform vec3 iColorStart;
        uniform vec3 iColorEnd;
        uniform float iIsDark;
        varying vec2 vUv;

        // Simplex noise function
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          
          // Liquid motion
          float time = iTime * 0.15;
          vec2 pos = uv * 3.0;
          float n = snoise(pos + vec2(time));
          
          // Warp domain
          vec2 q = vec2(0.);
          q.x = snoise(pos + vec2(0.0, time));
          q.y = snoise(pos + vec2(5.2, 1.3 * time));
          
          vec2 r = vec2(0.);
          r.x = snoise(pos + 1.0*q + vec2(1.7, 9.2) + 0.15*time);
          r.y = snoise(pos + 1.0*q + vec2(8.3, 2.8) + 0.126*time);
          
          float f = snoise(pos + r);
          
          // Calculate Base Color from Noise
          // For Dark Mode: Start black, add color
          // For Light Mode: Start transparent/white, add rich color
          
          vec3 colorMixed = mix(iColorStart, iColorEnd, smoothstep(0.0, 1.0, r.x));
          
          // Alpha/Intensity logic
          float intensity = smoothstep(0.0, 1.0, f);
          
          // Output color
          vec3 finalColor = colorMixed;
          
          // If Dark Mode: Background is black, we want glowing color.
          // If Light Mode: Background is white, we want bold color.
          
          // Use intensity as alpha for both modes to create floating shapes
          float alpha = intensity * 0.6; 
          
          if (iIsDark < 0.5) {
             // Light mode specific adjustments: slightly more opaque to see on white
             alpha = intensity * 0.8;
          }

          // Grain
          float grain = fract(sin(dot(uv, vec2(12.9898, 78.233) * 2.0)) * 43758.5453);
          finalColor += grain * 0.04;

          // Vignette
          float vig = 1.0 - length(uv - 0.5) * 1.5;
          alpha *= clamp(vig, 0.0, 1.0);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      // Switch blending based on theme
      blending: theme.isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Fade in
    const fadeTimeout = setTimeout(() => setCanvasOpacity(1), 50);

    // Animation Loop
    let animationId: number;
    const animate = (time: number) => {
      material.uniforms.iTime.value = time * 0.001;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [theme.primary, theme.secondary, theme.isDark]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* WebGL Background */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-0 transition-opacity duration-1000 pointer-events-none"
        style={{ opacity: canvasOpacity }}
      />

      {/* Brutalist Content Layer */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-20">
        {/* Top Bar: Monospace details */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full flex justify-between items-start font-mono text-[10px] md:text-xs uppercase tracking-widest"
          style={{ color: theme.primary }}
        >
          <div className="flex flex-col gap-1">
            <span>( {project.year} )</span>
            <span>{project.platform}</span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span>{project.organizaton}</span>
            <span>Scroll for Details ↓</span>
          </div>
        </motion.div>

        {/* Center: Massive Title */}
        <motion.div
          style={{ y: titleY }}
          className="flex-1 flex items-center justify-center"
        >
          <h1
            className="text-[12vw] md:text-[14vw] leading-[0.8] font-black text-transparent stroke-text text-center tracking-tighter mix-blend-overlay"
            style={{
              WebkitTextStroke: theme.isDark
                ? "1px rgba(255,255,255,0.8)"
                : "0px transparent",
            }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="block font-rozha mix-blend-normal"
              style={{ color: theme.isDark ? theme.text : theme.primary }}
            >
              {project.title}
            </motion.span>
          </h1>
        </motion.div>

        {/* Bottom: Links & Stack */}
        <motion.div
          style={{ y: metaY }}
          className="w-full flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="max-w-lg">
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
              {project.short_description}
            </p>

            <div className="mt-6 flex gap-4">
              {project.web_url && (
                <Link
                  href={project.web_url}
                  target="_blank"
                  className="px-6 py-2 border rounded-full hover:opacity-80 transition-all duration-300 uppercase text-xs font-bold tracking-wider"
                  style={{
                    borderColor: theme.primary,
                    color: theme.primary,
                    backgroundColor: "transparent",
                  }}
                >
                  Visit Site
                </Link>
              )}
              {(project.appstore_url || project.playstore_url) && (
                <Link
                  href={project.appstore_url || project.playstore_url || "#"}
                  target="_blank"
                  className="px-6 py-2 border rounded-full hover:opacity-80 transition-all duration-300 uppercase text-xs font-bold tracking-wider"
                  style={{
                    borderColor: theme.text,
                    color: theme.background,
                    backgroundColor: theme.text,
                  }}
                >
                  Download App
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-wrap gap-2 justify-end max-w-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 border rounded text-[10px] font-mono uppercase opacity-60"
                  style={{
                    borderColor: theme.text,
                    backgroundColor: `${theme.text}10`,
                  }} // 10 hex = low opacity
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-20"
        style={{
          background: `linear-gradient(to top, ${theme.background}, transparent)`,
        }}
      />
    </div>
  );
};
