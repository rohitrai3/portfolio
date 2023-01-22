import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Rohit Rai",
      "Guy-who-loves-Coffe.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
        alt="Protrait"
        width={128}
        height={128}
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
    </div>
  );
}
