import { openModal } from '../ImageModal/ImageModal'
import './ImageWithGIF.scss'

function ImageWithGIF({image, gif}: {image: string, gif: string}) {
    function onMouseEnterImg(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        const imgObj = document.getElementById(image);
        const gifObj = document.getElementById(gif);
        if (!imgObj || !gifObj) return;

        imgObj.classList.add("inactive");
        imgObj.classList.remove("active")
        gifObj.classList.add("active");
        gifObj.classList.remove("inactive");
    }

    function onMouseExitGif(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        const imgObj = document.getElementById(image);
        const gifObj = document.getElementById(gif);
        if (!imgObj || !gifObj) return;

        imgObj.classList.remove("inactive");
        imgObj.classList.add("active")
        gifObj.classList.remove("active");
        gifObj.classList.add("inactive");
    }

    return (
        (gif !== '' ? 
        (<div>
            <img id={image} className="game-img active image-shadow" alt='game-img' src={image} onMouseEnter={onMouseEnterImg} />
            <img id={gif} className="game-gif inactive" alt='game-gif' src={gif} onClick={openModal} onMouseLeave={onMouseExitGif}></img>
        </div>):
        <img id={image} className="game-img image-shadow" alt='game-img' src={image} onClick={openModal}></img>)
    )
}

export default ImageWithGIF