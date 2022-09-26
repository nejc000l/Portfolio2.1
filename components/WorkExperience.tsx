import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function s({}: Props) {
  return (
    <div 
    className="
    h-screen 
    relative
    flex-relative 
    flex overflow-hidden 
    flex-col mx-auto 
    justify-evenly 
    items-center 
    px-10 max-w-full 
    md:flex-row 
    text-lft ">
             <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl" >
            Skills
        </h3>
        <div className="w-full flex items-center justify-center snap-x">
        <ExperienceCard/>
       
        </div>
    </div>
  );
}
