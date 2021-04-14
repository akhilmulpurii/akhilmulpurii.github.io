import justactImage from "../../images/justact.png";
import justact2Image from "../../images/justact-2.png";
import justact3Image from "../../images/justact-3.png";
import noisefitImage from "../../images/noisefit.png";
import noisefit2Image from "../../images/noise-fit.png";
import noisefitBannerImage from "../../images/noise_banner.png";
import heyheyImage from "../../images/heyhey.png";
import heyheyWeb from "../../images/heyheyweb.png";
import heyheyUser from "../../images/heyheyuser.png";
import heyheyTalent from "../../images/heyheytalent.png";
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
      technologies: ["React Native", "Firebase", "Redux", "Shopify"],
      platform: "iOS, Android",
      description:
        "NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.",
      sections: [
        {
          image: noisefit2Image,
          heading: "Fast. Responsive. Cross Platform.",
          caption:
            "NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.",
        },
        {
          image: noisefitBannerImage,
          heading: "App has a inbuilt store for quick purchases",
          caption:
            "The app has a shop section backed by the Shopify API's to allow users to purchase the products at their leisure. The shop is built completely with Shopify Storefront APIs & Pure React Native Code. ( No Webviews Included )",
        },
      ],
      appstore_url:
        "https://apps.apple.com/in/app/noisefit-health-fitness/id1498457147",
      playstore_url:
        "https://play.google.com/store/apps/details?id=com.noisefit",
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
      sections: [
        {
          image: heyheyWeb,
          heading: "Quick & Accessible Web app at your finger tips.",
          caption:
            "HeyHey has a fast and responsive web app which allows users to purchase celebrity shoutouts as well as allows celebrities to manage their bookings through the celebrity portal.",
        },
        {
          image: heyheyUser,
          heading:
            "Cross-platform app to browse and book your favorite celebs.",
          caption:
            "Discover and book customized video shout-outs from your favourite actors, athletes, musicians, reality television stars, YouTubers and influencers! Reserve your unique HeyHey today, it's the perfect wedding, anniversary or birthday present.",
        },
        {
          image: heyheyTalent,
          heading: "App Dedicated for Celebrities",
          caption:
            "The app is completely built with UX keeping a celebrity in mind by providing a simple UI to record the shoutouts in the least possible clicks. The video gets processed in AWS & is sent back to the users after the request is completed.",
        },
      ],
      appstore_url:
        "https://apps.apple.com/us/app/heyhey-talent-fan-videos/id1509874968",
      playstore_url: "https://play.google.com/store/apps/details?id=com.heyhey",
      web_url: "https://heyheyglobal.com/",
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
      sections: [
        {
          image: visitlyImage,
          heading: "Contactless Easy Sign-In/Off",
          caption:
            "My Visitly is a cross-platform application that provides sign-in/out capabilities to organizations working at premises during the COVID-19 pandemic. It offers a hands-free method of logging into the portal without the risk of physical contact.",
        },
      ],
      appstore_url: "https://apps.apple.com/us/app/my-visitly/id1500199942",
      playstore_url:
        "https://play.google.com/store/apps/details?id=com.visitlyapp",
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
      sections: [],
      appstore_url: "https://apps.apple.com/us/app/id1506871435",
      playstore_url:
        "https://play.google.com/store/apps/details?id=com.punchapp",
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
      sections: [],
      web_url: "https://winekey.co/",
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
      sections: [],
      playstore_url: "https://play.google.com/store/apps/details?id=com.rangde",
    },
  ],
};
