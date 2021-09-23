import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import CustomTimeline from '../components/home/experience/CustomTimeline';
import Skills from '../components/home/skills/Skills'
import ProjectCard from '../components/home/projects/ProjectCard';
import Greetings from '../components/home/greetings/Greetings';
import Experience from '../components/home/experience/Experience';
import AboutMe from '../components/home/aboutme/AboutMe';
import Projects from '../components/home/projects/Projects';
import Footer from '../components/home/footer/Footer';
import NavBar from '../components/home/navbar/NavBar';

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
    <div className={styles.container}>
      <Head>
        <title>Máximo Lanza</title>
        <meta name="description" content="Máximo Lanza is a software developer who specializes in building and mantaining up to date software." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>

        <section className={styles.greetings}>
          <Greetings />
        </section>


        <section id="experience" className={styles.experience}>
          <Experience />
        </section>


        <section id="aboutme" className={styles.aboutme}>
          <AboutMe />
        </section>

        <section id="skills" className={styles.skills}>
          <Skills />
        </section>

        <section id="projects" className={styles.projects}>
          <Projects />
        </section>
        <Footer />
      </main>


    </div>
  )
}

export default Home
