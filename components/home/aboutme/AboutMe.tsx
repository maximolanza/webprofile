import styles from "../../../styles/Home.module.css";
const AboutMe = () => {
    return (
        <>
            <h2 data-aos="fade-left" className={styles.rightTitle}>About me</h2>
            <div data-aos="zoom-out-left" className={styles.card}>
                <div className={styles.cardText}>
                    <p>

                    </p>
                    <p>
                        Hi there! My name is Máximo and I enjoy creating technological things, sharing knowledge and providing solutions to people.
                        My interest in programming and technology began in 2005 with my 12-year-old self testing programs that people downloaded at Cyber cafes, learning how to manage one, and taking apart my personal computer.
                    </p>
                    <p>
                        At 16 I went to live in another city to begin my studies in computer science (UTU) and after that I moved to another city to finish "Technologist in Informatics" in Montevideo.
                    </p>
                    <p>
                        I had the privilege of working as technical support for approximately 300 restaurants and later as remote support and GeneXus developer in one of the most prestigious hospitals in Uruguay.
                    </p>
                    <p>
                        I am currently living my dream working in a financial company where I can develop in technologies such as ReactJs, NextJs and Java.
                    </p>
                    <p>
                        And, not less important <b>I really love coffee :D</b>
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;