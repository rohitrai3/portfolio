import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
        alt="Company Logo"
      />
    </article>
  );
}
