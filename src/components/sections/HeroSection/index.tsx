import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Libre_Baskerville, Bricolage_Grotesque } from "next/font/google";

const LibreBaskerville = Libre_Baskerville({
  weight: "400",
  style: "italic",
  display: "swap",
  subsets: ["latin"],
});
const BricolageGrotesque = Bricolage_Grotesque({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

interface HeroSectionProps {}

const HeroSection: React.FunctionComponent<HeroSectionProps> = () => {
  return (
    <AuroraBackground>
      <h1 className="text-6xl text-center">
        <span className={BricolageGrotesque.className}>
          <span>Building the </span>
          <span className="text-primary">Future</span>
        </span>
        ,<br />
        <span className={LibreBaskerville.className}>
          One Line of Code at a Time
        </span>
      </h1>
    </AuroraBackground>
  );
};

export default HeroSection;
