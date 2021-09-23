import styles from './../../../styles/Home.module.css';

const ProjectCard = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className={styles.projectCardContainer}>
            <div className={styles.projectCard}>
                Project
            </div>
        </div>
    );
}

export default ProjectCard;