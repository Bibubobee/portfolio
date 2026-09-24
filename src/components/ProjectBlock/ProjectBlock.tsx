import { Game } from "$customTypes/game.types";
import ProjectCard from "./ProjectCard";
import './ProjectBlock.scss'

function ProjectBlock({ projects }: { projects: Game[]}) {

    return (
        <section id="projects" className="projects-block container">
            <div id="circle"/>
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard project_data={project} index={index} />
                ))}
            </div>
        </section>
    )
}

export default ProjectBlock;