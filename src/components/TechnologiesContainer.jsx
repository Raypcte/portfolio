import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiAws,
  DiSass,
  DiPython,
  DiDocker,
  DiMsqlServer,
  DiScrum,
} from "react-icons/di";
import{
  SiMongodb,
} from 'react-icons/si'
import { ImSigma } from "react-icons/im";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, nivel: 'Avançado' },
  { id: "css", name: "CSS3", icon: <DiCss3 />, nivel: 'Avançado' },
  { id: "sass", name: "Sass", icon: <DiSass />, nivel: 'Avançado' },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, nivel: 'Avançado' },
  { id: "python", name: "Python", icon: <DiPython />, nivel: 'Avançado' },
  { id: "sql", name: "SQL", icon: <DiMsqlServer />, nivel: 'Avançado' },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, nivel: 'Avançado' },
  { id: "mongodb", name: "MongoDB", icon: <SiMongodb />, nivel: 'Avançado' },
  { id: "docker", name: "Docker", icon: <DiDocker />, nivel: 'Avançado' },
  { id: "aws", name: "AWS", icon: <DiAws />, nivel: 'Avançado' },
  { id: "sigma", name: "Sigma", icon: <ImSigma />, nivel: 'Intermediário' },
  { id: "scrum", name: "SCRUM", icon: <DiScrum/>, nivel: 'Avançado' },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{`Nivel ${tech.nivel}`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
