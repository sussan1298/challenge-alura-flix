import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

ModalContext.displayName = "Modal Context"

export default function ModalContextProvider({ children }) {
    const [openedModal, setopenedModal] = useState({opened: false, videoId: null})

    return (<ModalContext.Provider value={{ openedModal, setopenedModal }}>
        {children}
    </ModalContext.Provider>
    )
}