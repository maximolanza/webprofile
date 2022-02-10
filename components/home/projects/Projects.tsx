import { useEffect, useState } from 'react';
import ProjectCard from "./ProjectCard";
// import getProjects from './../../../ApiManager/ApiManajer';
import projectsJson from '../../../public/data/Projects.json';

interface Project {
    id: number,
    name: string,
    url: string,
    img: string,
    alt: string,
    description: string,
    repositoryUrl: string,
    repositoryType: string,
    host: string,
    skills: []
}
const Projects = () => {

    // const [projects, setProjects] = useState(undefined);

    // useEffect(() => {
    //     if (!projects) {
    //         // getAllProjects();
    //     }
    // }, [])


    // const getAllProjects = async () => {
    //     const projectsResponse = getProjects()
    //         .then(response => {
    //             return response.json();
    //         }
    //         );
    //     setProjects(await projectsResponse)
    // }
    if (!projectsJson) {
        return null;
    }

    return (
        <>
            <h2 className={"right-title"}>Projects</h2>
            {
                projectsJson.projects.map((project) => {
                    return <ProjectCard project={project} />
                }
                )
            }

        </>
    );
}

export default Projects;