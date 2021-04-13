import justactImage from "../../images/justact.png";
import noisefitImage from "../../images/noisefit.png";
import heyheyImage from "../../images/heyhey.png";

export const data = {
  projects: [
    {
      title: "JustAct",
      image: justactImage,
      urlSlug: "justact",
      background:
        "background:linear-gradient(-40deg, #c9ffbf 0%,#ffafbd 100% );",
      large: true,
      technologies: ["React", "Webpack", "NodeJS"],
      platform: "Web",
      description:
        "JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.",
    },
    {
      title: "NoiseFit",
      image: noisefitImage,
      urlSlug: "noisefit",
      background:
        "background:linear-gradient(40deg, #43c6ac 0%,#191654 100% );",
      large: false,
      technologies: ["React Native", "Firebase", "Redux"],
      platform: "iOS, Android",
      description:
        "NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.",
    },
    {
      title: "HeyHey",
      image: heyheyImage,
      urlSlug: "heyhey",
      background:
        "background:linear-gradient(90deg, #dd5e89 0%,#f7bb97 100% );",
      large: false,
      technologies: ["React", "React Native", "AWS"],
      platform: "Web, iOS, Android",
      description:
        "HeyHey is the destination where you can book personalized video shout outs from your favorite celebrities for all occasions. Our mission is to deliver memorable moments and experiences to you from the artists you love most.",
    },
    {
      title: "My Visitly",
      image: heyheyImage,
      urlSlug: "my-visitly",
      background:
        "background:linear-gradient(90deg, #89f7fe 0%,#66a6ff 100% );",
      large: false,
      technologies: ["React", "React Native", "Firebase"],
      platform: "iOS, Android",
      description:
        "My Visitly is a cross-platform application that provides sign-in/out capabilities to organizations working at premises during the COVID-19 pandemic. It offers a hands-free method of logging into the portal without the risk of physical contact.",
    },
  ],
};
