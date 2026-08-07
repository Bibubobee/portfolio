import { Game } from "$customTypes/game.types";
import ProjectCard from "./ProjectCard";
import './ProjectBlock.scss'

function ProjectBlock({ projects }: { projects: Game[]}) {

    return (
        <section className="projects-block">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard project_data={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectBlock;