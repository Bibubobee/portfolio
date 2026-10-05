import { Game } from "$customTypes/game.types";
import { useParams } from "react-router-dom";
import './GamePage.scss'
import ImageModal from "../../components/ImageModal/ImageModal";
import ImageWithGIF from "../../components/ImageWithGIF/ImageWithGIF";

// TODO: Implementar layout para cada juego, debería recibir por parametros el contenido que utilizará
function GamePage({ game_data }: { game_data: Game[] }) {
    const { game_id } = useParams();
    const idx = game_id ? Number(game_id) : 0;
    const game: Game = game_data[idx];
    document.title = game.title;
    
    // TODO: Traer componente de video desde web slime
    // TODO: Agregar bloque de tiempo dedicado al proyecto, tamaño del equipo, rol que tuve y link si tiene
    // TODO: Los links que aparezcan en la sección con el fondo azul deben ser de otro color.
    return (
        <div className="container">
            <div className="game-page">
                <div className="title-container">
                    <div className="game-title-block">
                        <h1 className="game-heading title-shadow">{game.title}</h1>
                        {game.video_url !== "" ?
                            (<iframe title='game-video' className="image-shadow" src={game.video_url + "&controls=0"}></iframe>) :
                            (
                                <div className="construction-warning">
                                    <div>UNDER CONSTRUCTION</div>
                                    <p>There should be a video here, i'll get to it soon!</p>
                                </div>
                            )
                        }
                        
                    </div>
                    <div className="description-block">
                        <p id="game-author" className="title-shadow" dangerouslySetInnerHTML={{__html: game.author}}/>
                        <div className="game-intro">
                            <p dangerouslySetInnerHTML={{__html: game.full_desc}}></p>
                        </div>
                    </div>
                    
                </div>
                <div className="game-body">
                    <div className="my-role">
                        <h2 className="game-heading title-shadow">My role in this</h2>
                        <p dangerouslySetInnerHTML={{__html: game.my_work}}></p>
                    </div>
                    <div className="game-images">
                        {game.example_imgs.map((img, index) => (
                            <ImageWithGIF image={img} gif={game.gif_for_ex[index]} />
                        ))}
                    </div>           
                </div>
            </div>
            <ImageModal/>
        </div>
    );
}

export default GamePage;