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
        "background:linear-gradient(90deg, #c9ffbf 0%,#ffafbd 100% );",
      large: true,
    },
    {
      title: "NoiseFit",
      image: noisefitImage,
      urlSlug: "noisefit",
      background:
        "background:linear-gradient(90deg, #43c6ac 0%,#191654 100% );",
      large: false,
    },
    {
      title: "HeyHey",
      image: heyheyImage,
      urlSlug: "heyhey",
      background:
        "background:linear-gradient(90deg, #00c3ff 0%,#ffff1c 100% );",
      large: false,
    },
  ],
};
