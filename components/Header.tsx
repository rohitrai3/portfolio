import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/rohitrai3"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rohitrai03/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="rohitraijob@gmail.com"
          fgColor="gray"
          bgColor="transparent"
          label="Email"
        />
      </div>
    </header>
  );
}
