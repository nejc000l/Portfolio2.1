import React from "react";
import { motion } from "framer-motion";
import{Experience} from '../typings'
type Props = {experience: Experience[]};

export default function About({experience}: Props){
  
    

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        {" "}
        About
      </h3>
      <motion.img
        className="w-[200px] h-[200px] -mb:20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGy5NC7wMAhMg/profile-displayphoto-shrink_800_800/0/1601549566124?e=1669248000&v=beta&t=kjN90yUJC_btzcma8TqsYPXBDQv_Jbc1Aw3JA6aLMZo"
      />
      <div className="space-y-10 px:0 md:px-10 m-10 overflow-hidden flex flex-wrap">
        <h3 className="text-4xl md:text-6xl  font-extralight	">
          Here is a{" "}
          <span className=" decoration-[#f0ae4cd5]/50 text-[#f0ae4cd5]">
            little{" "}
          </span>{" "}
          background,
        </h3>

       
            {experience?.map((exp)=>(
              <h4  key={exp._id} className="text-md text-justify font-extralight md:text-2xl xl:text-4xl">
                {exp.company}
              </h4>
            ))}
      </div>
    </motion.div>
  );
}
