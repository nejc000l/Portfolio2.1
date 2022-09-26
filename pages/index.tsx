import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projcets";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import {Experience, Project, Skill, Social} from '../typings'
import {fetchExperiences} from '../utils/fetchExperiences'
import {fetchSkills} from '../utils/fetchSkills'
import {fetchProjects} from '../utils/fetchProjects'
import {fetchSocials} from '../utils/fetchSocials'



type Props = {
  experience:Experience[];
  skills:Skill[];
  projects:Project[];
  socials:Social[];
  }
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
  const experience : Experience[] = await fetchExperiences();
  const skills : Skill[] = await fetchSkills();
  const projects : Project[] = await fetchProjects();
  const socials : Social[] = await fetchSocials();
  return{
    props:{
      experience,
      skills,
      projects,
      socials,
    },
    revalidate:10
  }
}