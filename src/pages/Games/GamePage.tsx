import { Game } from "$customTypes/game.types";
import { useParams } from "react-router-dom";
import './GamePage.scss'

// TODO: Implementar layout para cada juego, debería recibir por parametros el contenido que utilizará
function GamePage({ game_data }: { game_data: Game[] }) {
    const { game_id } = useParams();
    const idx = game_id ? Number(game_id) : 0
    const game: Game = game_data[idx]
    // TODO: Traer componente de video desde web slime
    return (
        <section className="container">
            <div className="game-page">
                <div className="title-container">
                    <div className="game-title-block">
                        <h1>{game.title}</h1>
                        <iframe title='game-video' src={game.video_url + "&controls=0"}></iframe>
                    </div>
                    <div className="game-intro">
                        <p dangerouslySetInnerHTML={{__html: game.full_desc}}></p>
                    </div>
                </div>
                <div className="desc-container">
                    <h2>My role in this</h2>
                    <p dangerouslySetInnerHTML={{__html: game.my_work}}></p>
                </div>
            </div>
        </section>
    )
}

export default GamePage;