import styles from "./ModalEdit.module.css"

import { useContext, useState, useEffect } from "react";
import { ModalContext } from "components/Context/ModalContext";
import { VideosContext } from "components/Context/VideosContext";

import EditarVideo from "components/EditarVideo";


function ModalEdit({ videoId }) {

    const { setopenedModal } = useContext(ModalContext);
    const { videos, setVideos } = useContext(VideosContext);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (videoId) {
            const videoToEdit = videos.find((video) => video.id === videoId);
            if (videoToEdit) {
                setTitle(videoToEdit.titulo);
                setCategory(videoToEdit.categoria);
                setImage(videoToEdit.imagen);
                setVideo(videoToEdit.video);
                setDescription(videoToEdit.descripcion);
            }
        }
    }, [videoId, videos]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const videoEditado = {
            id: videoId,
            titulo: title,
            categoria: category,
            imagen: image,
            video: video,
            descripcion: description,
        };

        await EditarVideo(videoId, videoEditado, setVideos);

        setopenedModal({ opened: false, videoId: null });

    }


    return (
        <>
            <div className={styles.overlay}></div>

            <dialog className={styles.modalDialog} open>

                <form onSubmit={handleSubmit} className={styles.videoForm}>

                    <button className={styles.cerrarModal} onClick={() => setopenedModal({ opened: false, videoId: null })}>X</button>

                    <h2>EDITAR CARD:</h2>

                    <div className={styles.inputGroup}>
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ingrese el título"
                            required></input>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="category">Categoría</label>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required>
                            <option value="">Seleccione una categoría</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="innovacion">Innovación/Gestión</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="image">Imagen</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Ingrese la imagen del video"
                            required></input>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="video">Video</label>
                        <input
                            type="text"
                            id="video"
                            name="video"
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                            placeholder="Ingrese el enlace del video"
                            required></input>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            cols="40"
                            placeholder="Ingrese la descripción"
                            required></textarea>
                    </div>

                    <div className={styles.formButtons}>
                        <button type="submit" className={styles.guardar}>Guardar</button>
                        <button type="reset" className={styles.limpiar}>Reiniciar</button>
                    </div>

                </form>
            </dialog>
        </>
    );
}

export default ModalEdit;