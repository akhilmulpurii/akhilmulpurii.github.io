import { motion } from "framer-motion";
import Image from "next/image";

const { forwardRef } = require("react");

const MotionImage = forwardRef(function (props, ref) {
  return <Image {...props} ref={ref} />;
});

const ExoticImage = motion(MotionImage);

export default ExoticImage;
