import VideosContextProvider from "components/Context/VideosContext";
import Footer from "components/Footer";
import Header from "components/Header";

const { default: NuevoVideoForm } = require("components/NuevoVideoForm");


function NuevoVideo() {

    return (
        <>
            <Header />
            <VideosContextProvider>
                <NuevoVideoForm />
            </VideosContextProvider>
            <Footer />
        </>
    )
}

export default NuevoVideo;