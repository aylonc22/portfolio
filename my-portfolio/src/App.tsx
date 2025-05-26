function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
    <header>
      <h1>Aylon Cohen</h1>
      <p>Software Developer</p>
    </header>

    <section>
    <h2>Tech Stack</h2>
    <div className="stack-icons">
      <img src="https://cdn.simpleicons.org/node.js" alt="Node.js"/>
      <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript"/>
      <img src="https://cdn.simpleicons.org/postgresql" alt="PostgreSQL"/>
      <img src="https://cdn.simpleicons.org/docker" alt="Docker"/>
      <img src="https://cdn.simpleicons.org/github" alt="GitHub"/>
    </div>
  </section>

  <section>
    <h2>Projects</h2>
    <div className="projects">
      <div className="project">
        <h3>AsyncQueue</h3>
        <p>A lightweight task queue with priority, retries, and concurrency control.</p>
      </div>
      <div className="project">
        <h3>SimpleDNS</h3>
        <p>A DNS resolver from scratch in TypeScript to explore low-level networking.</p>
      </div>
    </div>
  </section>
  </div>
  );
}

export default App;
