import styles from "./Footer.module.css"
import logo from "./LogoMain.png"

function Footer() {
    return (
        <footer className={styles.footerContainer}>

                <img src={logo} alt="Logo AluraFlix" />

        </footer>
    )
}

export default Footer;