import react from '../../../public/images/front/react.png';
import next from '../../../public/images/front/nextjs.png';
import angular from '../../../public/images/front/angular.png';
import java from '../../../public/images/back/java.png';
import nodejs from '../../../public/images/back/nodejs.png';
import mysql from '../../../public/images/back/mysql.png';
import sqlserver from '../../../public/images/back/sqlserver.png';
import SkillCard from './SkillCard';

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
      <h2
        data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        className={"title fade-up"}>Skills</h2>
      {skillSet.map((skillArea, i) => (
        <div key={i} className={"skills-row"}>
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
