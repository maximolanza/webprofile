import Image from 'next/image';
import styles from './../../../styles/Home.module.css';

const SkillCard = ({ name, image, theme }) => {

    return (
        <div data-aos="flip-left" className={styles.skillcard}>
            <div className={`${styles.logo} ${styles.valign} ${theme !== 'none' && styles['logo-bg-' + theme]}`}> <Image src={image} alt={name} layout="responsive"  ></Image> </div>
            <div className={`${styles.logoDescription} ${styles.valign}`}> {name}</div>
        </div>
    );
}

export default SkillCard;