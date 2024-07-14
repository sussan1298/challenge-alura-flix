import styles from "./Banner.module.css";
import player from "./player.png";


function Banner() {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.textConatiner}>
                <h1>FRONT END</h1>
                <h2>Challenge React</h2>
                <p>Este challenge es una forma de aprendizaje.
                    Es un mecanismo donde podrás comprometerte
                    en la resolución de un problema para poder
                    aplicar todos los conocimientos adquiridos
                    en la formación React.</p>
            </div>
            <img className={styles.imgContainer} src={player} alt="Banner"/>
        </section>
    )
}

export default Banner