import justactImage from "../../images/justact.png";
import justact2Image from "../../images/justact-2.png";
import justact3Image from "../../images/justact-3.png";
import noisefitImage from "../../images/noisefit.png";
import noisefitBannerImage from "../../images/noise_banner.png";
import heyheyImage from "../../images/heyhey.png";
import visitlyImage from "../../images/visitly.png";
import punchImage from "../../images/punch.png";
import winekeyImage from "../../images/winekey.png";
import rangdeImage from "../../images/rangde.png";

export const data = {
  projects: [
    {
      title: "JustAct",
      image: justactImage,
      banner_image: justactImage,
      urlSlug: "justact",
      background:
        "background:linear-gradient(-40deg, #c9ffbf 0%,#ffafbd 100% );",
      large: true,
      technologies: ["React", "Webpack", "NodeJS"],
      platform: "Web",
      description:
        "JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.",
      sections: [
        {
          image: justact2Image,
          heading: "What is JustAct?",
          caption:
            "JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.",
        },
        {
          image: justact3Image,
          heading:
            "JustAct will issue a signed Settlement Agreement for Negotiation and Mediation which are enforceable.",
          caption:
            "JustAct offers you ready, relaxed resolution that embodies the spirit of ADR in its purest form by using independent and credible resolution techniques / professionals who are trained to resolve disputes amicably. It also offers all ADR services – Negotiation, Mediation / Conciliation and Arbitration in one place.",
        },
      ],
      web_url: "https://justact.co.in/",
      appstore_url: null,
      playstore_url: null,
    },
    {
      title: "NoiseFit",
      image: noisefitImage,
      banner_image: noisefitBannerImage,
      urlSlug: "noisefit",
      background:
        "background:linear-gradient(40deg, #43c6ac 0%,#191654 100% );",
      large: false,
      technologies: ["React Native", "Firebase", "Redux"],
      platform: "iOS, Android",
      description:
        "NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.",
      sections: [{}, {}],
    },
    {
      title: "HeyHey",
      image: heyheyImage,
      banner_image: heyheyImage,
      urlSlug: "heyhey",
      background:
        "background:linear-gradient(90deg, #dd5e89 0%,#f7bb97 100% );",
      large: false,
      technologies: ["React", "React Native", "AWS"],
      platform: "Web, iOS, Android",
      description:
        "HeyHey is the destination where you can book personalized video shout outs from your favorite celebrities for all occasions. Our mission is to deliver memorable moments and experiences to you from the artists you love most.",
      sections: [{}, {}],
    },
    {
      title: "My Visitly",
      image: visitlyImage,
      banner_image: visitlyImage,
      urlSlug: "my-visitly",
      background:
        "background:linear-gradient(90deg, #89f7fe 0%,#66a6ff 100% );",
      large: false,
      technologies: ["React Native", "Firebase", "Redux"],
      platform: "iOS, Android",
      description:
        "My Visitly is a cross-platform application that provides sign-in/out capabilities to organizations working at premises during the COVID-19 pandemic. It offers a hands-free method of logging into the portal without the risk of physical contact.",
      sections: [{}, {}],
    },

    {
      title: "Punch App",
      image: punchImage,
      banner_image: punchImage,
      urlSlug: "punchapp",
      background:
        "background:linear-gradient(90deg, #ec008c 0%,#fc6767 100% );",
      large: false,
      technologies: ["React Native", "Firebase", "Intercomm"],
      platform: "iOS, Android",
      description:
        "Punch is a free messaging app that enables B2B ecommerce. From orders to payments and everything in between. Welcome to hassle free wholesale",
      sections: [{}, {}],
    },
    {
      title: "Winekey",
      image: winekeyImage,
      banner_image: winekeyImage,
      urlSlug: "winekey",
      background:
        "background:linear-gradient(90deg, #bbd2c5 0%,#536976 50%,#292e49 100% );",
      large: false,
      technologies: ["React", "NextJS", "AWS"],
      platform: "Web",
      description:
        "Winekey makes it easy to plan your next client event, team bonding activity or group event. Browse experiences or talk to an event planner below",
      sections: [{}, {}],
    },
    {
      title: "RangDe",
      image: rangdeImage,
      banner_image: rangdeImage,
      urlSlug: "rangde",
      background:
        "background:linear-gradient(90deg, #e65c00 0%,#f9d423 100% );",
      large: false,
      technologies: ["React Native", "Firebase", "AWS"],
      platform: "iOS, Android",
      description:
        "RangDe APP is a Contractor's Personal Assistant to shop, learn & earn. Shop Paints, Waterproofing, Polishing material at best prices at your most convenience.",
      sections: [{}, {}],
    },
  ],
};
