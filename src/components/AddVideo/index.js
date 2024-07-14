//Funcion llamada cuando se hace "submit" al form. 
//Toma los datos y actualiza el contexto de los videos haciendo el post al json

async function AddVideo(nuevoVideo, setVideos) {

    try {
        const response = await fetch('https://my-json-server.typicode.com/sussan1298/alura-flix-api/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoVideo),
        });

        if (response.ok) {
            const videoAgregado = await response.json(); // Convierte la respuesta JSON del servidor en un objeto JavaScript
            setVideos(prevVideos => [...prevVideos, videoAgregado]); // Actualiza el estado añadiendo el nuevo video al final de la lista. prevVideos es la lista antes de los cambios
        } else {
            console.error('Failed to add video');
        }
    } catch (error) {
        console.error('Error adding video:', error);
    }
    
}

export default AddVideo;
