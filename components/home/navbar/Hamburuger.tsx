
import styles from "../../../styles/Home.module.css";

const Hamburuger = ({ hamburguer, setHamburuger }) => {

    return (
        <button className={styles.hamburguerButton} onClick={() => setHamburuger(!hamburguer)} id={styles.hamburguer}>
            <span className={hamburguer ? styles["hamburguerLine"] + " " + styles['topHamb'] : styles["hamburguerLine"]}></span>
            <span className={hamburguer ? styles["hamburguerLine"] + " " + styles['middleHamb'] : styles["hamburguerLine"]}></span>
            <span className={hamburguer ? styles["hamburguerLine"] + " " + styles['bottomHamb'] : styles["hamburguerLine"]}></span>
        </button >
    );
}

export default Hamburuger;