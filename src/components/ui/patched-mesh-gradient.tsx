"use client";

import { memo } from "react";
import {
  defaultObjectSizing,
  getShaderColorFromString,
  meshGradientFragmentShader,
  ShaderFitOptions,
  type MeshGradientParams,
} from "@paper-design/shaders";
import { ShaderMount } from "@paper-design/shaders-react";

type MeshGradientPatchedProps = Partial<MeshGradientParams> &
  Omit<React.ComponentProps<typeof ShaderMount>, "fragmentShader" | "uniforms">;

const patchedFragmentShader = meshGradientFragmentShader.replace(
  "vec2 grainUV = uv * 1000.;",
  "vec2 grainUV = v_objectUV * 1000.;",
);

const defaultParams = {
  ...defaultObjectSizing,
  speed: 1,
  frame: 0,
  colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"],
  distortion: 0.8,
  swirl: 0.1,
  grainMixer: 0,
  grainOverlay: 0,
  fit: defaultObjectSizing.fit,
};

export const MeshGradientPatched = memo(function MeshGradientPatched(
  props: MeshGradientPatchedProps,
) {
  const {
    speed = defaultParams.speed,
    frame = defaultParams.frame,
    colors = defaultParams.colors,
    distortion = defaultParams.distortion,
    swirl = defaultParams.swirl,
    grainMixer = defaultParams.grainMixer,
    grainOverlay = defaultParams.grainOverlay,
    fit = defaultParams.fit,
    rotation = defaultParams.rotation,
    scale = defaultParams.scale,
    originX = defaultParams.originX,
    originY = defaultParams.originY,
    offsetX = defaultParams.offsetX,
    offsetY = defaultParams.offsetY,
    worldWidth = defaultParams.worldWidth,
    worldHeight = defaultParams.worldHeight,
    ...rest
  } = props;

  const colorArray = colors ?? [];
  const uniforms = {
    u_colors: colorArray.map(getShaderColorFromString),
    u_colorsCount: colorArray.length,
    u_distortion: distortion,
    u_swirl: swirl,
    u_grainMixer: grainMixer,
    u_grainOverlay: grainOverlay,
    u_fit: ShaderFitOptions[fit],
    u_rotation: rotation,
    u_scale: scale,
    u_offsetX: offsetX,
    u_offsetY: offsetY,
    u_originX: originX,
    u_originY: originY,
    u_worldWidth: worldWidth,
    u_worldHeight: worldHeight,
  };

  return (
    <ShaderMount
      {...rest}
      speed={speed}
      frame={frame}
      fragmentShader={patchedFragmentShader}
      uniforms={uniforms}
    />
  );
});
