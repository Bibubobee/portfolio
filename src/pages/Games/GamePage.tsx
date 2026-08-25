import { Game } from "$customTypes/game.types";
import { useParams } from "react-router-dom";
import './GamePage.scss'

// TODO: Implementar layout para cada juego, debería recibir por parametros el contenido que utilizará
function GamePage({ game_data }: { game_data: Game[] }) {
    const { game_id } = useParams();
    const idx = game_id ? Number(game_id) : 0
    const game: Game = game_data[idx]
    // TODO: Para imagenes extra, permitir GIFs
    // TODO: Para imagenes extra, permitir agrandar las fotos
    // TODO: Traer componente de video desde web slime
    // TODO: Agregar bloque de tiempo dedicado al proyecto, tamaño del equipo, rol que tuve y link si tiene
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
                <div className="game-body">
                    <div className="my-role">
                        <h2>My role in this</h2>
                        <p dangerouslySetInnerHTML={{__html: game.my_work}}></p>
                    </div>
                    <div className="game-images">
                        {game.example_imgs.map((img, _index) => (
                            <img alt='game-img' src={img}></img>
                        ))}
                    </div>           
                </div>
            </div>
        </section>
    )
}

export default GamePage;