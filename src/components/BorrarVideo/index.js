import { useContext } from "react";

async function BorrarVideo(id, setVideos) {

    try {
        const response = await fetch(`https://my-json-server.typicode.com/sussan1298/alura-flix-api/videos/${id}`, { // Hay que incluir el ID en la URL o si no no funciona
            method: 'DELETE',
        });

        if (response.ok) {
            setVideos(prevVideos => prevVideos.filter(video => video.id !== id)); //La lista como está actualmente (prevVideos) se filtra (dejando solo los que tengan id diferente al id que se recibe)
        } else {
            console.error('Failed to add video');
        }
    } catch (error) {
        console.error('Error adding video:', error);
    }

}

export default BorrarVideo;