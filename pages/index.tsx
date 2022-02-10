import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Skills from '../components/home/skills/Skills'
import Greetings from '../components/home/greetings/Greetings';
import Experience from '../components/home/experience/Experience';
import AboutMe from '../components/home/aboutme/AboutMe';
import Projects from '../components/home/projects/Projects';
import Footer from '../components/home/footer/Footer';
import NavBar from '../components/home/navbar/NavBar';

// interface Project {
//   id: number,
//   name: string,
//   url: string,
//   img: string,
//   alt: string,
//   description: string,
//   repositoryUrl: string,
//   repositoryType: string,
//   host: string,
//   skills: []
// }

// export const getStaticProps: GetStaticProps = async () => {

//   const https = require('https');
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });
//   const res = await fetch('http://myjson.dit.upm.es/api/bins/h27z', {
//     method: 'GET',,
//     agent
//   }
//   );


//   // const res = await fetch('http://myjson.dit.upm.es/api/bins/h27z')
//   const projects: Project[] = await res.json()
//   return {
//     props: {
//       projects,
//     },
//   }
// };

// export async function getStaticProps() {
//   const res = await fetch('http://myjson.dit.upm.es/api/bins/h27z')
//   const projects = await res.json()
//   return {
//     props: {
//       projects,
//     },
//   }
// }{ projects }: InferGetStaticPropsType<typeof getStaticProps>


const Home: NextPage = () => {

  const [scrollPos, setScrollPos] = useState(0);


  useEffect(() => {

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    console.log('scroll event', window.scrollY)
    if (window.scrollY > scrollPos) {

    }
    setScrollPos(window.scrollY);

  }
  return (
    <div className={"container"}>
      <Head>
        <title>Máximo Lanza</title>
        <meta name="description" content="Máximo Lanza is a software developer who specializes in building and mantaining up to date software." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main id="home" className={"main"}>

        <section className={"greetings"}>
          <Greetings />
        </section>

        <section id="experience" className={"experience"}>
          <Experience />
        </section>

        <section id="aboutme" className={"aboutme"}>
          <AboutMe />
        </section>

        <section id="skills" className={"skills"}>
          <Skills />
        </section>

        <section id="projects" className={"projects"}>
          <Projects />
        </section>
        <Footer />
      </main>


    </div>
  )
}



// Home.getInitialProps = async ({ req }) => {
//   const res = await fetch('http://myjson.dit.upm.es/api/bins/h27z')
//   const projects: Project[] = await res.json()
//   return {
//     props: {
//       projects,
//     },
//   }
// }

export default Home
