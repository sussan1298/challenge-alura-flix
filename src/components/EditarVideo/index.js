async function EditarVideo(id, videoEditado, setVideos) {
    try {
        const response = await fetch(`http://localhost:3000/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(videoEditado),
        });

        if (response.ok) {
            const updatedVideo = await response.json();
            setVideos((prevVideos) =>
                prevVideos.map((video) =>
                    video.id === id ? updatedVideo : video
                )
            );
        } else {
            console.error('Failed to update video');
        }
    } catch (error) {
        console.error('Error updating video:', error);
    }
}

export default EditarVideo;


