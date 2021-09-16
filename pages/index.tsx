import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import CustomTimeline from '../components/home/CustomTimeline';
import Skills from '../components/home/skills/Skills'
import ProjectCard from '../components/home/projects/ProjectCard';
import greetingsImg from '../public/images/home/Blue-in-Jacket.png';
import Image from 'next/image';
import Typewriter from '../components/typewriter/Typewriter';
import Typer from '../components/typewriter/Typewriter';

const Home: NextPage = () => {
  const [reference, setReference] = useState();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar} id="home">
        <a href="#home">Home</a>
        <a href="#experience">Experiencie</a>
        <a href="#aboutme">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
      <main className={styles.main}>

        <section className={styles.greetings}>
          <div className={styles.greetingsText}>
            <h1>
              <span>Hi!</span>
              <span>I'm Máximo Lanza</span>
              {/*<Typewriter
                reference={reference}
                setReference={setReference}
              strings={["Software Developer"]} />*/}
              <Typer />
            </h1>
          </div>
          <div className={styles.greetingsImage}>
            <Image src={greetingsImg} alt="Illustration of a abstract man witha  cup of coffee and touching ideas" />
          </div>
        </section>


        <section id="experience" className={styles.experience}>
          <h2 className={styles.title}>Experience</h2>
          <CustomTimeline />
        </section>


        <section id="aboutme" className={styles.aboutme}>
          <h2 className={styles.rightTitle}>About me</h2>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <p>
                I am passionate about creating things, sharing knowledge and providing solutions to people.
              </p>
              <p>
                And, i really love coffee :D
              </p>
            </div>
          </div>
        </section>






        <section id="skills" className={styles.skills}>
          <h2 className={styles.title}>Skills</h2>
          <Skills />
        </section>

        <section id="projects" className={styles.projects}>
          <h2 className={styles.rightTitle}>Projects</h2>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </main>

      <footer className={styles.footer}>

        Footer
      </footer>
    </div>
  )
}

export default Home
