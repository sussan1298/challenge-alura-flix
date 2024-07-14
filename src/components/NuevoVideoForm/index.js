import styles from "./NuevoVideoForm.module.css"
import { useState, useContext } from "react";
import { VideosContext } from "components/Context/VideosContext";
import AddVideo from "components/AddVideo";

    function NuevoVideoForm() {

        const { setVideos } = useContext(VideosContext);

        const [title, setTitle] = useState("");
        const [category, setCategory] = useState("");
        const [image, setImage] = useState("");
        const [video, setVideo] = useState("");
        const [description, setDescription] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();

            const nuevoVideo = {
                id: Date.now().toString(),
                titulo: title,
                categoria: category,
                imagen: image,
                video: video,
                descripcion: description,
            };

            await AddVideo(nuevoVideo, setVideos);

            setTitle("");
            setCategory("");
            setImage("");
            setVideo("");
            setDescription("");
        }

        return (
            <div className={styles.formContainer}>

                <div className={styles.textsContainer}>
                    <h1 >Nuevo Video</h1>
                    <p>Complete el formulario para crear una nueva tarjeta de video</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.videoForm}>

                    <h2>Crear Tarjeta</h2>

                    <div className={styles.inputsContainer}>

                        <div className={styles.formGroup}>
                            <label htmlFor="title">Título</label>
                            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ingrese el título" required></input>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="category">Categoría</label>
                            <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Seleccione una categoría" required>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="innovacion">Innovación/Gestión</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="image">Imagen</label>
                            <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Ingrese la imagen del video" required></input>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="video">Video</label>
                            <input type="url" id="video" name="video" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Ingrese el enlace del video" required></input>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="description">Descripción</label>
                            <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" placeholder="Ingrese el enlace del video" required></textarea>
                        </div>
                    </div>

                    <div className={styles.formButtons}>
                        <button type="submit" className={styles.guardar}>Guardar</button>
                        <button type="reset" className={styles.limpiar}>Limpiar</button>
                    </div>

                </form>
            </div>
        );
    };

export default NuevoVideoForm;


