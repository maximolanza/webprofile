import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import CustomTimeline from '../components/home/CustomTimeline';
import Skills from '../components/home/skills/Skills'
import ProjectCard from '../components/home/projects/ProjectCard';
import coffee from '../public/images/home/verticalsplashcoffee2.png';
import Image from 'next/image';

const Home: NextPage = () => {
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
           <span>Software Developer</span>
           </h1>
           </div>
           <div className={styles.greetingsImage}>
            <Image src={coffee} alt="Splashing cup of coffee"/>
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
