import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative isolate mx-auto w-full overflow-hidden rounded-2xl  px-3 py-6  backdrop-blur">
      <div
        aria-hidden="true"
        className="-top-px pointer-events-none absolute inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-[#f4a261]/50 to-transparent opacity-80"
      />

      <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-9 select-none opacity-25 transition-opacity duration-200 hover:opacity-100 md:h-16 brightness-0 invert"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute left-0 top-0 h-full w-[140px] lg:w-[400px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute right-0 top-0 h-full w-[140px] lg:w-[400px]"
        direction="right"
      />

      <div
        aria-hidden="true"
        className="-bottom-px pointer-events-none absolute inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#f7d7a3]/45 to-transparent opacity-80"
      />
    </div>
  );
}
