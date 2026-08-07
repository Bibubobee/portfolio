import { Game } from "@customTypes/game.types";

function ProjectBlock({ project_data }: { project_data: Game}) {
    const title = project_data.title
    const desc = project_data.small_desc

    return (
        <div className="project">
            <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src='' className="zoom" alt="thumbnail" width="100%"/></a>
            <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>{title}</h2></a>
            <p>{desc}</p>
        </div>
    )
}

export default ProjectBlock;