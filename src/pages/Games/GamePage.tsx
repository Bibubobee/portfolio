import { Game } from "$customTypes/game.types";
import { useParams } from "react-router-dom";
import './GamePage.scss'

// TODO: Implementar layout para cada juego, debería recibir por parametros el contenido que utilizará
function GamePage({ game_data }: { game_data: Game[] }) {
    const { game_id } = useParams();
    const idx = game_id ? Number(game_id) : 0
    const game: Game = game_data[idx]
    return (
        <section className="container">
            <div className="game-page">
                <div className="title-container">
                    <div className="title-text">
                        <h1>{game.title}</h1>
                        <p>{game.full_desc}</p>
                    </div>
                </div>
                <div className="desc-container">
                    <p dangerouslySetInnerHTML={{__html: game.my_work}}></p>
                </div>
            </div>
        </section>
    )
}

export default GamePage;