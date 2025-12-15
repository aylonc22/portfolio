import github from '../../assets/icons/GitHub.svg';

const Projects = () => {
    return (
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
    );
}

export default Projects;