import "./ImageModal.scss"

export function openModal(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    const imgObj = event.currentTarget;
    if (!imgObj) return;

    const img_path = imgObj.src;

    let modal = document.getElementById("modal");
    if (!modal) return;
    modal.style.display = "flex";
    modal.classList.add("show");
    const image = modal.getElementsByTagName("img")[0];
   
    if (!image) return;
    image.src = img_path;
}

function ImageModal() {
    function closeModal(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        const target = event.target as HTMLElement
        if (
            target?.id === "modal" ||
            target?.classList.contains("close")
        ) {
            let modal = document.getElementById("modal");
            if (!modal) return;
            modal.classList.remove("show");
            modal.style.display = "none";
        }
    }

    return (
        <div id="modal" className="img-modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src="img_5terre.jpg" alt="Hello world" className="modal-content"/>
        </div>
    );
}

export default ImageModal;
