import React from "react";
import Image from "next/image";

type Props = {};

export default function Skill({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:graysacle transition duration-300 ease-in-out"
        width={96}
        height={96}
        alt="Tech logo"
      />
    </div>
  );
}
