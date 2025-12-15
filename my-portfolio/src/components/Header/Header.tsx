import myPicture from '../../assets/linkdinProfile.jpg';
import linkedin from '../../assets/icons/LinkedIn.svg';
import location from '../../assets/icons/Location.svg';
import javascript from '../../assets/icons/JavaScript.svg';
import typescript from '../../assets/icons/TypeScript.svg';
import react from '../../assets/icons/React.svg';
import nodejs from '../../assets/icons/Node.js.svg';
import java from '../../assets/icons/Java.svg';
import spring from '../../assets/icons/Spring.svg';
import csharp from '../../assets/icons/CSharp.svg';
import redis from '../../assets/icons/Redis.svg';
import mongodb from '../../assets/icons/MongoDB.svg';
import mysql from '../../assets/icons/MySQL.svg';
import docker from '../../assets/icons/Docker.svg';
import amazonaws from '../../assets/icons/AWS.svg';
import git from '../../assets/icons/Git.svg';
import github from '../../assets/icons/GitHub.svg';

type stackItem = {src:string, alt:string};

const stack: stackItem[] = [
    { src: javascript, alt: "JavaScript" },
    { src: typescript, alt: "TypeScript" },
    { src: react, alt: "React" },
    { src: nodejs, alt: "Node.js" },
    { src: java, alt: "Java" },
    { src: spring, alt: "Spring Boot" },
    { src: csharp, alt: "C#" },
    { src: redis, alt: "Redis" },
    { src: mongodb, alt: "MongoDB" },
    { src: mysql, alt: "MySQL" }, 
    { src: docker, alt: "Docker" },
    { src: amazonaws, alt: "AWS" },
    { src: git, alt: "Git" }
];

const Header = () => {
    return  (<header>
        <img className="profile-pic" src={myPicture} alt="Aylon Cohen" />
        <h1>Aylon Cohen</h1>
        <p>Software Developer</p>
        <div className="social-links">
        <a href="https://github.com/aylonc22" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/aylon-cohen-b01b38232/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
        </a>
        </div>
        <div className="location">
            <img src={location} alt="Location" />
            <span>Tel Aviv, Israel</span>
        </div>             
            <div className="stack-icons">
            {stack.map((tech, index) => (
            <img
            key={tech.alt}
            style={{ "--i": index } as React.CSSProperties}
            src={tech.src}
            alt={tech.alt}
            />
        ))}
            </div>     
        </header>)
}

export default Header;