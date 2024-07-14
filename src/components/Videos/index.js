import VideoCard from "components/VideoCard";
import styles from "./Videos.module.css"
import { useContext } from "react";
import { VideosContext } from "components/Context/VideosContext";

function Videos({ name }) {

    const { videos } = useContext(VideosContext);

    const filteredVideos = videos.filter(video => video.categoria === name)

    return (
        <section className={styles.sectionContainer}>

            <h2 className={`${styles.title} ${styles[`title-${name}`]}`}>
                {name}
            </h2>

            <div className={styles.videosContainer}>

                {filteredVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}

            </div>

        </section>
    );

};

export default Videos;
