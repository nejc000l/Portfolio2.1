import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const { text, count } = useTypewriter({
    words: ["Hello", "My Name is Nejc", "and I`m a Fullstack Developer"],
    loop: 0,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-20 w-20 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGy5NC7wMAhMg/profile-displayphoto-shrink_800_800/0/1601549566124?e=1669248000&v=beta&t=kjN90yUJC_btzcma8TqsYPXBDQv_Jbc1Aw3JA6aLMZo"
        alt=""
      />
      <div className="z-20">

      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Front End Developer
      </h2>
      <h1
        className="text-5xl lg:text-6xl 
      font-semibold scroll-px-10 "
      >
        <span className="mr-3">{text}</span>
        <Cursor />
      </h1>
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
