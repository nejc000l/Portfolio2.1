import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from 'framer-motion'
import Link from "next/link";
import {Social} from '../typings'

type Props = {
  socials:Social[],

};

function Header({socials}: Props) {
  
  
  return (
    <header className="sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{x:0,opacity:1,scale:1,}}
      transition={{duration:1}}
      className="flex flex-row items-center">
        {socials.map((social)=>(
          
        <SocialIcon
          key={social._id}
          url={social.url}
          fgColor='gray'
          bgColor="transparent"
        />
        ))}
      
      </motion.div>
      <div className="hidden md:pt-5 md:flex ">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact</button>
        </Link>
      </div>
      <motion.div
      initial={{x:500}} animate={{x:0,opacity:1, scale:1}}
      transition={{duration:1}}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <div className="flex flex-row justify-center items-center text-sm">
          
        <p className="hidden md:inline-flex text-sm text-gray-400"></p>
       
        <span>nejc.lampic@gmail.com</span>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
