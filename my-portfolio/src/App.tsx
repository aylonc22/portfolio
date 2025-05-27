 import myPicture from './assets/linkdinProfile.jpg';
 import javascript from './assets/icons/JavaScript.svg';
import typescript from './assets/icons/TypeScript.svg';
import react from './assets/icons/React.svg';
import nodejs from './assets/icons/Node.js.svg';
import java from './assets/icons/Java.svg';
import spring from './assets/icons/Spring.svg';
import csharp from './assets/icons/CSharp.svg';
import redis from './assets/icons/Redis.svg';
import mongodb from './assets/icons/MongoDB.svg';
import mysql from './assets/icons/MySQL.svg';
import docker from './assets/icons/Docker.svg';
import amazonaws from './assets/icons/AWS.svg';
import git from './assets/icons/Git.svg';
import linkedin from './assets/icons/LinkedIn.svg';
import github from './assets/icons/GitHub.svg';
import location from './assets/icons/Location.svg';

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


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
    <header>
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
    </header>

    <section className="about">
  <h2>About Me</h2>
  <p>
    Energetic and detail-oriented <strong>Fullstack Developer</strong> with 3+ years of hands-on experience
    building web, desktop, and cloud-based applications. Skilled in transforming complex requirements
    into clean, scalable solutions. Proven track record in full project ownership — from backend APIs
    to frontend interfaces and cloud deployment — delivering reliable systems in both team and solo environments.
  </p>
  <p>
    Outside of coding, I’m a passionate <strong>volleyball player</strong>, an experience that sharpened
    my teamwork, discipline, and leadership skills.
  </p>
</section>

  <section>
  <h2>Experience</h2>
  <div className="experience-list">
    <div className="experience-item">
      <h3>Tombot X <span>Oct 2024 – Present</span></h3>
      <p className="role">Software Developer · Remote</p>
      <p className="desc">
        Developed backend REST APIs and frontend React components for real-time social listening and automation.
         Led the design and deployment of a multi-service Dockerized architecture on AWS ECS. Built CI/CD pipelines and monitoring for platform stability, 
         and integrated AI modules (e.g., ChatGPT) to automate engagement workflows.
      </p>
    </div>
    <div className="experience-item">
      <h3>Freelance <span>2023 – Present</span></h3>
      <p className="role">Full Stack Developer · Israel</p>
      <p className="desc">
        Delivered fullstack React and Node.js applications from concept to deployment.
         Implemented secure JWT-based authentication, deployment workflows, and worked closely with clients like N.B. Solutions
          and Aviel Marketing to meet deadlines and feature requirements.
      </p>
    </div>
    <div className="experience-item">
      <h3>IAF, Palmahim <span>2019 – 2022</span></h3>
      <p className="role">Software Developer · Military Service</p>
      <p className="desc">
        Engineered UAV communication systems using C# and Node.js. Led modernization efforts 
        to replace outdated telemetry decoders with optimized solutions, coordinated deployment cycles, and received 4 Certificates of 
        Excellence for innovation and operational impact.
      </p>
    </div>
  </div>
</section>


<section>
  <h2>Projects</h2>
  <div className="projects">
    <div className="project" onClick={() => window.open('https://github.com/aylonc22/simplegit', '_blank')}>
      <a href="https://github.com/aylonc22/simplegit" target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={github} alt="GitHub" />
      </a>
      <h3>SimpleGit</h3>
      <p>A minimal, educational Git clone built in Node.js. Understand how Git works under the hood.</p>
    </div>
    <div className="project" onClick={() => window.open('https://github.com/aylonc22/credit-agent-management-system', '_blank')}>
      <a href="https://github.com/aylonc22/credit-agent-management-system" target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={github} alt="GitHub" />
      </a>
      <h3>Credit Agent Management System</h3>
      <p>A full-featured platform to manage agents, clients, credits, and transactions using a React frontend and Node.js backend.</p>
    </div>
    <div className="project" onClick={() => window.open('https://github.com/aylonc22/asyncqueue', '_blank')}>
      <a href="https://github.com/aylonc22/asyncqueue" target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={github} alt="GitHub" />
      </a>
      <h3>AsyncQueue</h3>
      <p>Lightweight async task queue with support for priorities, retries, concurrency, and React hooks.</p>
    </div>
    <div className="project" onClick={() => window.open('https://github.com/aylonc22/simplehttp', '_blank')}>
      <a href="https://github.com/aylonc22/simplehttp" target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={github} alt="GitHub" />
      </a>
      <h3>SimpleHTTP</h3>
      <p>A minimal HTTP server built from scratch using Node.js sockets. No frameworks, just raw protocols.</p>
    </div>
    <div className="project" onClick={() => window.open('https://github.com/aylonc22/blocktree', '_blank')}>
      <a href="https://github.com/aylonc22/blocktree" target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={github} alt="GitHub" />
      </a>
      <h3>BlockTree</h3>
      <p>A custom blockchain implementation using a B+ tree for efficient on-chain state storage and retrieval.</p>
    </div>
  </div>
</section>

  </div>
  );
}

export default App;
