import Typer from "../../typewriter/Typewriter";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import greetingsImg from '../../../public/images/home/Blue-in-Jacket.png';

const Greetings = () => {
    return (
        <>
            <div className={styles.greetingsText}>
                <h1>
                    <span>Hi!</span>
                    <span>I'm Máximo Lanza</span>
                    <Typer />
                </h1>
            </div>
            <div data-aos="fade-up-left"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="bottom-bottom"
                aos-duration="3000"
                className={styles.greetingsImage}>
                <Image src={greetingsImg} alt="Illustration 3D blue hand making the sign of Spok that means long live and prosper" />
            </div>
        </>
    );
}

export default Greetings;