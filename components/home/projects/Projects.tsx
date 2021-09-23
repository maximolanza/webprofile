import ProjectCard from "./ProjectCard";
import styles from '../../../styles/Home.module.css';

const Projects = () => {
    return (
        <>
            <h2 className={styles.rightTitle}>Projects</h2>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </>
    );
}

export default Projects;