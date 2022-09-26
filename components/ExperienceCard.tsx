import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function ExperienceCard({}: Props) {
    
  return (
    <article className="flex  justify-evenly items-center rounded-l space-y-7 flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[900px] flex-col snap-center bg-[#4453] p-10">
          
            <motion.img 
            initial={{y:-100,}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="h-32 w-32 rounded-full  xl:h-[200px] xl:w-[200px] object-center object-cover" src="https://www.kwslovenia.com/f/pics/dogodki/shutterstock_4_b.png" alt="" />


            <div className="flex  justify-evenly items-center flex-col ">
      
        
                <h4 className="text-4xl font-light mt-10 uppercase text-orange-400 ">
                  Technologies used 
                </h4>
                
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
                className="flex space-x-2 my-2 pt-10 flex-shrink flex-wrap"> 
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_100,c_limit,g_center,h_100/v1/academind.com/site/topics/html"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_100,c_limit,g_center,h_100/v1/academind.com/site/topics/css"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_100,c_limit,g_center,h_100/v1/academind.com/site/topics/javascript"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://e7.pngegg.com/pngimages/72/936/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail.png"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_100,c_limit,g_center,h_100/v1/academind.com/site/topics/nodejs"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_100,c_limit,g_center,h_100/v1/academind.com/site/topics/typescript"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_100,c_limit,g_center,h_100/v1/academind.com/site/topics/react"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="data:image/png;base64,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"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jYmVlYjQ0NmQwYzExNjk3NDNiZjQ1MzY2NGFiYmEyYj9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.V7SEGwoG0xwfND5lR0Yes84UXgViq6EWUQ-fvf4SzLc"/>
                    <img className="object-contain  h-10 w-10 md:h-16 md:w-16 rounded-full" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"/>

                </motion.div>
            </div>

    </article>
  )
}