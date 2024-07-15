import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext();

VideosContext.displayName = "Videos Context"

export default function VideosContextProvider({ children }) {

    const [videos, setVideos] = useState([])

    useEffect(() => {

        async function fetchVideos() {
            try {
                const response = await fetch('http://localhost:3000/videos');
                const videosDesdeBase = await response.json();
                setVideos(videosDesdeBase); //sea asigna la respuesta proveniente del json al context (videos)

            } catch (error) {
                console.error('Error fetching Videos:', error);
            }
        }
        fetchVideos();
    }, [])// El array vacío significa que esto solo se ejecuta una vez, cuando el componente se monta

    return (<VideosContext.Provider value={{ videos, setVideos }}>
        {children}
    </VideosContext.Provider>
    )
}