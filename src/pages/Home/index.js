import ModalContextProvider, { ModalContext } from "components/Context/ModalContext";
import { useContext } from "react";

import Banner from "components/Banner";
import Header from "components/Header";
import Videos from "components/Videos";
import ModalEdit from "components/ModalEdit";
import Footer from "components/Footer";
import VideosContextProvider from "components/Context/VideosContext";

function Home() {

    const { openedModal } = useContext(ModalContext)

    return (
        <>
            <Header />
            <Banner />
            <VideosContextProvider>
                <Videos name="frontend" />
                <Videos name="backend" />
                <Videos name="innovacion" />
                {openedModal.opened && <ModalEdit videoId={openedModal.videoId} />}
            </VideosContextProvider>
            <Footer />
        </>
    )
}

export default Home;
