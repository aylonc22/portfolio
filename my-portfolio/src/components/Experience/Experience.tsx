const Experience = () => {
    return (
            <section>
                <h2>Experience</h2>
                <div className="experience-list">
                    <div className="experience-item">
                    <h3>Tombot X <span>Oct 2024 – Present</span></h3>
                    <p className="role">Software Developer · Remote</p>
                    <p className="desc">
                        Developed backend REST APIs and frontend React components for real-time social listening and automation.
                        Led the design and deployment of a multi-service Dockerized architecture on AWS ECS. Built CI/CD pipelines and monitoring for platform stability, 
                        and integrated AI modules (e.g., GPT) to automate engagement workflows.
                    </p>
                    </div>
                    <div className="experience-item">
                    <h3>Lor Guardian <span>2022 – 2024</span></h3>
                    <p className="role">Software Developer · Israel</p>
                    <p className="desc">
                        Developed and maintained a real-time Overwolf application for Legends of Runeterra players.
                        Integrated with Riot Games API to provide in-game overlays and strategic data during matches.
                        Built features to track player performance and match history using TypeScript and Node.js.
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
    );
}

export default Experience;