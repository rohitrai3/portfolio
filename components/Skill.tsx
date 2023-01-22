import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:graysacle transition duration-300 ease-in-out"
          width={96}
          height={96}
          alt="Tech logo"
        />
      </motion.div>
    </div>
  );
}
