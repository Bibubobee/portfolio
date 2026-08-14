import { Game } from "$customTypes/game.types"
import { Link } from "react-router-dom"
import './ProjectCard.scss'

function ProjectCard({ project_data, index }: { project_data: Game, index: number}) {
    const title = project_data.title
    const desc = project_data.small_desc
    const img = project_data.img_src

    return (
        <div className="project">
            <div className="img-container">
                <Link to={"/game/" + index}><img src={img} className="zoom" alt="thumbnail" width="100%"/></Link>
            </div>
            <Link to={"/game/" + index}><h2>{title}</h2></Link>
            <p>{desc}</p>
        </div>
    )
}

export default ProjectCard;