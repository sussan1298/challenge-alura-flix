import { useContext } from "react"
import { ModalContext } from "components/Context/ModalContext"
import { VideosContext } from "components/Context/VideosContext"

import styles from "./VideoCard.module.css"
import trash from "./delete_icon.png"
import edit from "./edit_icon.png"
import { Link } from "react-router-dom"

import BorrarVideo from "components/BorrarVideo"

function VideoCard({ video }) {
    
    const { openedModal, setopenedModal } = useContext(ModalContext);
    const { setVideos } = useContext(VideosContext);

    return (
        <>

            <section className={`${styles.videoCard} ${styles[`videoCard-${video.categoria}`]}`}>
                <img className={styles.videoImg} src={video.imagen} alt={`Imagen de portada para el video ${video.titulo}`} />

                <div className={styles.actionsContainer}>
                    <button className={styles.deleteAction} onClick={() => BorrarVideo(video.id, setVideos) }>
                        <img src={trash} alt="Boton de borrar" />
                        <p>BORRAR</p>
                    </button>

                    <button className={styles.editAction} onClick={() => setopenedModal({opened: true, videoId: video.id})}>
                        <img src={edit} alt="Boton de editar" />
                        <p>EDIT</p>
                    </button>
                </div>
            </section>

        </>
    )

}

export default VideoCard;

