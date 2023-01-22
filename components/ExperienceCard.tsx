import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
          alt="Company Logo"
          width={128}
          height={128}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Postion Title</h4>
        <p className="font-bold text-2xl mt-1">Company Name</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
            alt="Tech logo"
            width={40}
            height={40}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
            alt="Tech logo"
            width={40}
            height={40}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
            alt="Tech logo"
            width={40}
            height={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started... - Ended...</p>
      </div>
    </article>
  );
}
