import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  projects: Project[];
};

export default function Projcets({ projects }: Props) {
  return (
    <div             
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[30%] bg-[#6440143c]/40 left-0 h-[500px] -skew-y-12 scrollbar scrollbar-track-gray-200/20  scrollbar-thumb-[#e6e5e3]" />
      <div className="scrollbar scrollbar-track-gray-200/20  scrollbar-thumb-[#e6e3e38e] relative w-full flex overflow-x-scroll overflow-y-hidden snap-x flex-shrink-0 snap-mandatory z-20 ">
        {projects?.map((project, i) => (
            
          <div key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 xl:p-96 h-screen"
          >
            <Link                 
             href={project.linkToBuild}>
              <motion.img

                className="cursor-pointer object-fill h-20 md:h-[24rem] "
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                alt=""
                src={urlFor(project?.image).url()}
              />
            </Link>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="decoration #af5d11 text-[2rem] ">
                  {" "}
                  Project <span className="text-[#e9b482]">{i + 1} </span> of <span className="text-[#e9b482]">  {projects.length}</span>:{" "}
                </span>
                <span >

                {project.title}
                </span>
              </h4>
              <Link  href={project.githubLink}>
                <p className="cursor-pointer underline  text-[#d5dbeccb]">Github: {project.title.toUpperCase()}</p>
              </Link>
              <div className="flex flex-row justify-evenly">
                {project?.technologies.map((technologi)=>(
                
                
                <img key={technologi._id} className="h-7 " src={urlFor(technologi.image).url()}/>
            
          ))}               
                </div>
              <p   className="text-lg text-center decoration-1	font-extralight  md:text-left text-gray-300">
               {project.summary}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
