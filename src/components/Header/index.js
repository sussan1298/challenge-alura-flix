import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import logo from "./LogoMain.png"
import NavLinks from "components/HeaderLinks";

function Header() {
    return (
        <header className={styles.headerContainer}>

            <Link to="/">
                <img src={logo} alt="Logo AluraFlix" />
            </Link>

            <div className={styles.linksContainer}>
                <NavLinks url="/">
                    Home
                </NavLinks>
                <NavLinks url="/NuevoVideo">
                    Nuevo Video
                </NavLinks>
            </div>
            
        </header>
    )
}

export default Header;

