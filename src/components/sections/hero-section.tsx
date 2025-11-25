import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function HeroSection() {
  return (
    <div className="relative mx-auto flex w-svw h-svh items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 flex flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row">
        <div>
          <h1 className="text-center text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl md:text-left dark:text-neutral-400">
            Sai Akhil <span className="font-bold dark:text-white">Mulpuri</span>
          </h1>
          <h1 className="text-center text-2xl font-normal tracking-tight text-neutral-900 sm:text-3xl md:text-left dark:text-neutral-400">
            Creative Web Developer
          </h1>
          <p className="mt-4 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-300">
            Transforming tomorrow with tech-infused narratives, my software
            creates fair and fun experiences for all.
          </p>
        </div>
      </div>
    </div>
  );
}
