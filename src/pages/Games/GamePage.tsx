import { Game } from "$customTypes/game.types";
import { useParams } from "react-router-dom";
import './GamePage.scss'

// TODO: Implementar layout para cada juego, debería recibir por parametros el contenido que utilizará
function GamePage({ game_data }: { game_data: Game[] }) {
    const { game_id } = useParams();
    const idx = game_id ? Number(game_id) : 0
    const game: Game = game_data[idx]
    return (
        <section className="container game-page">
            <h1>{game.title}</h1>
            <h2>Holis</h2>
        </section>
    )
}

export default GamePage;