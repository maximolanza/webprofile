import react from '../../../public/images/front/react.png';
import next from '../../../public/images/front/nextjs.png';
import angular from '../../../public/images/front/angular.png';
import java from '../../../public/images/back/java.png';
import nodejs from '../../../public/images/back/nodejs.png';
import mysql from '../../../public/images/back/mysql.png';
import sqlserver from '../../../public/images/back/sqlserver.png';
import SkillCard from './SkillCard';
import styles from '../../../styles/Home.module.css';

const Skills = () => {
  const skillSet = [
    [
      { name: 'ReactJs', image: react, theme: 'none' },
      { name: 'NextJs', image: next, theme: 'light' },
      { name: 'Angular', image: angular, theme: 'none' },
    ],
    [
      { name: 'Java', image: java, theme: 'none' },
      { name: 'NodeJs', image: nodejs, theme: 'none' },
      { name: 'SQL Server', image: sqlserver, theme: 'none' },
      { name: 'MySQL', image: mysql, theme: 'none' },
    ],
  ];

  return (
    <>
      <h2 data-aos="fade-left" className={styles.title}>Skills</h2>
      {skillSet.map((skillArea, i) => (
        <div key={i} className={styles.skillsRow}>
          {skillArea.map((skill, j) => (
            <SkillCard
              key={j}
              name={skill.name}
              image={skill.image}
              theme={skill.theme}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Skills;
