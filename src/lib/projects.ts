const noisefit = "/projects/noisefit.png";
const noisefitSection1 = "/projects/noisefit_section.png";
const noisefitSection2 = "/projects/noise_section_2.png";
const noisefitLogo = "/projects/noisefit_logo.png";
const heyhey = "/projects/heyhey.png";
const heyheyLogo = "/projects/heyhey_logo.svg";
const hxouse = "/projects/hxouse.png";
const hxouseLogo = "/projects/houseLogo.png";
const frankDarling = "/projects/frankdarling.png";
const frankDarlingLogo = "/projects/frankdarlingLogo.png";
const justAct = "/projects/justact.png";
const justActLogo = "/projects/justactLogo.png";
const skymd = "/projects/skymd.png";
const skymdLogo = "/projects/skymdLogo.png";
const heyheySection1 = "/projects/heyheySection1.png";
const heyheySection2 = "/projects/heyheySection2.png";
const heyheySection3 = "/projects/heyheySection3.png";
const justactSection1 = "/projects/justactSection1.png";
const justactSection2 = "/projects/justactSection2.png";
const visitlySection1 = "/projects/visitlySection1.png";
const visitly = "/projects/visitlySection1.png";
const frankDarlingSection1 = "/projects/frankdarling_section1.png";
const frankDarlingSection2 = "/projects/frankdarling_section2.png";
const skymdSection1 = "/projects/skymd_section1.png";
const skymdSection2 = "/projects/skymd_section2.png";
const hxouseSection1 = "/projects/hxouse_section1.png";
const hxouseSection2 = "/projects/hxouse_section2.png";
const visitlyLogo = "/projects/visitlyLogo.svg";

// TODO: Add images for the following projects

export interface ProjectSection {
  image: string;
  heading: string;
  caption: string;
}

export interface Project {
  title: string;
  logo: string;
  card_image: string;
  images?: string[];
  organizaton: string;
  short_description: string;
  urlSlug: string;
  technologies: string[];
  year: string;
  platform: string;
  description: string;
  sections: ProjectSection[];
  appstore_url?: string;
  playstore_url?: string;
  web_url?: string;
}

const projects: Project[] = [
  {
    organizaton: "F22 Labs",
    title: "NoiseFit",
    logo: noisefitLogo,
    card_image: noisefit,
    images: [noisefit, noisefitSection1, noisefitSection2],
    short_description: "A Companion App for Noise Smart Wearable Devices",
    urlSlug: "noisefit",
    technologies: ["React Native", "Firebase", "Redux", "Shopify"],
    year: "2020",
    platform: "iOS, Android",
    description:
      "NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.",
    sections: [
      {
        image: noisefitSection1,
        heading: "Fast. Responsive. Cross Platform.",
        caption:
          "NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.",
      },
      {
        image: noisefitSection2,
        heading: "App has a inbuilt store for quick purchases",
        caption:
          "The app has a shop section backed by the Shopify API's to allow users to purchase the products at their leisure. The shop is built completely with Shopify Storefront APIs & Pure React Native Code. ( No Webviews Included )",
      },
    ],
    appstore_url:
      "https://apps.apple.com/in/app/noisefit-health-fitness/id1498457147",
    playstore_url: "https://play.google.com/store/apps/details?id=com.noisefit",
  },
  {
    organizaton: "F22 Labs",
    title: "HeyHey",
    card_image: heyhey,
    logo: heyheyLogo,
    year: "2022",
    short_description:
      "Customized video shout-outs from your favorite celebrities",
    urlSlug: "heyhey",
    images: [heyhey, heyheySection1, heyheySection2, heyheySection3],
    technologies: ["React", "React Native", "AWS"],
    platform: "Web, iOS, Android",
    description:
      "HeyHey is the destination where you can book personalized video shout outs from your favorite celebrities for all occasions. Our mission is to deliver memorable moments and experiences to you from the artists you love most.",
    sections: [
      {
        image: heyheySection1,
        heading: "Quick & Accessible Web app at your finger tips.",
        caption:
          "HeyHey has a fast and responsive web app which allows users to purchase celebrity shoutouts as well as allows celebrities to manage their bookings through the celebrity portal.",
      },
      {
        image: heyheySection2,
        heading: "Cross-platform app to browse and book your favorite celebs.",
        caption:
          "Discover and book customized video shout-outs from your favourite actors, athletes, musicians, reality television stars, YouTubers and influencers! Reserve your unique HeyHey today, it's the perfect wedding, anniversary or birthday present.",
      },
      {
        image: heyheySection3,
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
    organizaton: "F22 Labs",
    title: "Frank Darling",
    logo: frankDarlingLogo,
    card_image: frankDarling,
    images: [frankDarling, frankDarlingSection1, frankDarlingSection2],
    year: "2023",
    technologies: ["Next.js", "Shopify", "Nuxt.js", "AWS"],
    urlSlug: "frankdarling",
    platform: "Website",
    web_url: "https://www.frankdarling.com/",
    short_description: "Build your dream engagement ring, online or in-store",
    description:
      "Frank Darling offers custom jewelry and engagement rings via a seamless online experience. From 3D ring builders to educational content and in-person appointments, the site provides the ultimate user-focused buying journey.",
    sections: [
      {
        image: frankDarlingSection1,
        heading: "Personalized Ring Building Experience",
        caption:
          "An interactive ring builder that allows users to design their dream ring online. Each design step is intuitive, visually engaging, and backed by real-time pricing.",
      },
      {
        image: frankDarlingSection2,
        heading: "Educational Shopping Experience",
        caption:
          "Rich editorial content helps users understand diamonds, pricing, sustainability, and craftsmanship while building trust through transparency.",
      },
    ],
  },
  {
    organizaton: "F22 Labs",

    title: "SkyMD",
    logo: skymdLogo,
    card_image: skymd,
    images: [skymd, skymdSection1, skymdSection2],
    technologies: ["React Native", "Next.js", "AWS"],
    year: "2021",
    urlSlug: "skymd",
    platform: "Web, iOS, Android",
    web_url: "https://www.skymd.com/",
    short_description: "",
    description:
      "SkyMD is a nationwide teledermatology platform that enables patients to consult board-certified dermatologists via mobile or web. The app supports image uploads, appointment scheduling, prescriptions, and follow-ups.",
    sections: [
      {
        image: skymdSection1,
        heading: "Accessible Virtual Dermatology",
        caption:
          "Patients can consult dermatologists anytime, anywhere through virtual visits using photos and live video.",
      },
      {
        image: skymdSection2,
        heading: "Secure and Compliant Platform",
        caption:
          "Built with HIPAA-compliant systems and integrated with AWS for secure storage and efficient processing of medical records.",
      },
    ],
  },
  {
    organizaton: "F22 Labs",
    title: "JustAct",
    card_image: justAct,
    logo: justActLogo,
    images: [justAct, justactSection1, justactSection2],
    year: "2020",
    short_description: "An online dispute resolution platform",
    urlSlug: "justact",
    technologies: ["React", "Webpack", "NodeJS"],
    platform: "Web",
    description:
      "JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.",
    sections: [
      {
        image: justactSection1,
        heading: "What is JustAct?",
        caption:
          "JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.",
      },
      {
        image: justactSection2,
        heading:
          "JustAct will issue a signed Settlement Agreement for Negotiation and Mediation which are enforceable.",
        caption:
          "JustAct offers you ready, relaxed resolution that embodies the spirit of ADR in its purest form by using independent and credible resolution techniques / professionals who are trained to resolve disputes amicably. It also offers all ADR services – Negotiation, Mediation / Conciliation and Arbitration in one place.",
      },
    ],
    web_url: "https://justact.co.in/",
  },

  {
    organizaton: "F22 Labs",

    title: "HXOUSE",
    logo: hxouseLogo,
    card_image: hxouse,
    images: [hxouse, hxouseSection1, hxouseSection2],
    technologies: ["React Native", "Firebase"],
    year: "2020",
    urlSlug: "hxouse",
    platform: "iOS, Android",
    short_description: "",
    description:
      "HXOUSE is a Toronto-based think-center for creative entrepreneurship. This mobile app supports event scheduling, content sharing, and mentorship opportunities for artists and creators.",
    sections: [
      {
        image: hxouseSection1,
        heading: "Platform for Creative Growth",
        caption:
          "Access to learning materials, event schedules, and community discussions that foster collaboration and growth.",
      },
      {
        image: hxouseSection2,
        heading: "Mentorship & Career Advancement",
        caption:
          "Provides exclusive access to mentors, creative leaders, and industry professionals via interactive sessions.",
      },
    ],
  },
  {
    organizaton: "Contract",

    title: "My Visitly",
    logo: visitlyLogo,
    card_image: visitly,
    images: [visitly, visitlySection1],
    sections: [
      {
        image: visitlySection1,
        heading: "Contactless Visitor Management",
        caption:
          "Provides QR-based sign-in and identity verification, ensuring safety during the pandemic and beyond.",
      },
    ],
    short_description: "Contactless Sign-In/Off & Visitor Management System",
    urlSlug: "my-visitly",
    year: "2020",
    technologies: ["React Native", "Firebase", "Redux"],
    platform: "iOS, Android",
    description:
      "My Visitly is a cross-platform application that provides sign-in/out capabilities to organizations working at premises during the COVID-19 pandemic. It offers a hands-free method of logging into the portal without the risk of physical contact.",
    appstore_url: "https://apps.apple.com/us/app/my-visitly/id1500199942",
    playstore_url:
      "https://play.google.com/store/apps/details?id=com.visitlyapp",
  },
];
export default projects;
