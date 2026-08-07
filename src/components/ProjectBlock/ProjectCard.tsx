import { Game } from "$customTypes/game.types"
import './ProjectCard.scss'

function ProjectCard({ project_data }: { project_data: Game}) {
    const title = project_data.title
    const desc = project_data.small_desc
    const img = project_data.img_src

    return (
        <div className="project">
            <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={img} className="zoom" alt="thumbnail" width="100%"/></a>
            <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>{title}</h2></a>
            <p>{desc}</p>
        </div>
    )
}

export default ProjectCard;