import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Hamburuger from "./Hamburuger";

const NavBar = () => {
    const [hamburguer, setHamburuger] = useState(false);
    return (


        <div className={styles.navbar} id="home">

            <Hamburuger hamburguer={hamburguer} setHamburuger={setHamburuger} />

            <div className={styles.navbar} id={styles.menu}>
                <a href="#home">Home</a>
                <a href="#experience">Experiencie</a>
                <a href="#aboutme">About me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </div>

        </div>


    );
}

export default NavBar;