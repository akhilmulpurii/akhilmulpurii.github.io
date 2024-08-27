import Link from "next/link";

interface HeroSectionProps {}

const links = [
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-akhil-mulpuri/",
  },
  {
    title: "GitHub",
    href: "https://github.com/akhilmulpurii",
  },
];

const HeroSection: React.FunctionComponent<HeroSectionProps> = () => {
  return (
    <section className="pt-10 md:pt-20">
      <div className="flex items-start flex-col md:flex-row flex-nowrap justify-between gap-8 pb-2 w-full">
        <h1 className="text-4xl md:text-6xl lg:text-8xl flex flex-[2] text-nowrap font-semibold text-primary">
          Akhil Mulpuri.
          <br />
          UI Developer
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-[14px] md:text-[18px] lg:text-[28px] max-w-lg flex flex-[1] font-semibold text-primary">
            I craft seamless digital experiences that blend visual elegance with
            intuitive functionality, ensuring every user interaction is smooth
            and satisfying.
          </h2>
          <div className="flex flex-row gap-4">
            {links.map((link) => (
              <Link
                href={link.href}
                className=" text-sm text-primary font-medium py-1 px-3 rounded-lg border border-primary hover:bg-slate-100 hover:border-slate-400 cursor-pointer transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
