import Image from 'next/image';

const SkillCard = ({ name, image, theme }) => {

    return (
        <div
            data-aos="flip-left" data-aos-anchor-placement="bottom-bottom"
            className="skill-card fade-up" >
            <div className={`logo valign ${theme !== 'none' && 'logo-bg-' + theme}`}>
                <Image src={image} alt={name} layout="responsive"  ></Image> </div>
            <div className={`logo-description valign`}> {name}</div>
        </div >
    );
}

export default SkillCard;