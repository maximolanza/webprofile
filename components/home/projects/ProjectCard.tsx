

const ProjectCard = ({ project }) => {
    return (
        <div
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            className="project-card-container">
            <div className="project-card">
                {project.name}
            </div>
        </div>
    );
}

export default ProjectCard;