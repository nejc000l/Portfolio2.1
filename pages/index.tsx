import type { GetStaticProps, NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projcets";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import {Experience,PageInfo, Project, Skill, Social} from '../typings'
import {fetchExperiences} from '../utils/fetchExperiences'
import {fetchSkills} from '../utils/fetchSkills'
import {fetchProjects} from '../utils/fetchProjects'
import {fetchSocials} from '../utils/fetchSocials'
import {fetchPageInfo} from '../utils//fetchPageInfo'
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

type Props = {
  experience:Experience[];
  projects:Project[];
  skills:Skill[];
  socials:Social[];
  }

const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`;

const query2 = groq`
*[_type == "project"]{
    ...,
    technologies[]->
}
`;
const query3 = groq`
*[_type == "skill"]
`

const query4 = groq`
*[_type == "social"]
`;
const Home = ({experience,projects,socials}:Props) => {
  
  return (
    <div
      className="bg-[rgb(36,36,36)] 
    text-white 
    h-screen 
    snap-y
    snap-mandatory 
    overflow-y-scroll
    overflow-x-hidden 
    z-0 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
    >
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials}/>
      <section className="snap-center" id="hero">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About experience={experience}/>
      </section>
      <section id="skills" className="snap-center">
        <WorkExperience />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            cursor-pointer"
              src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/angle-circle-arrow-up-icon.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const res = await sanityClient.fetch(query)
  const experience:Experience[]= res
  const res2= await sanityClient.fetch(query2)
  const projects: Project[]=res2
  const res3  = await sanityClient.fetch(query3)
  const skills: Skill[]= res3
  const res4 = await sanityClient.fetch(query4)
  const socials: Social[]= res4
  return{
    props:{
      experience,
      projects,
      skills,
      socials
    },
    revalidate:10
  }
}