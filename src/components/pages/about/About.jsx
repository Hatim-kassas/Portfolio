// about.jsx
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <div className="content-wrapper">
        <h1 className="title">
          Frontend & Mobile Engineer <br />
          <span className="highlight">with Deployment & Hosting Expertise</span>
        </h1>

        <div className="detailed-intro">
          <p className="sub-title">
            With 2+ years of professional experience specializing in frontend and mobile development,
            I create performant, user-centric applications with seamless backend integration.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1K+</div>
              <div className="stat-label">Users Reached</div>
            </div>
          </div>
        </div>

        <div className="technical-expertise">
          <h3 className="section-title">Technical Expertise</h3>
          <div className="competencies-grid">
            <div className="competency-category">
              <h4>Frontend Development</h4>
              <ul>
                <li><strong>React/Next.js</strong> (SSR, ISR, Optimization)</li>
                <li><strong>TypeScript</strong> (Type Systems, Patterns)</li>
                <li>State Management (Redux, Zustand)</li>
                <li>UI/UX Implementation (Figma to Code)</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="competency-category">
              <h4>Mobile Development</h4>
              <ul>
                <li><strong>Flutter</strong> (BLoC, Riverpod)</li>
                <li>Cross-platform Development</li>
                <li>Firebase Integration</li>
                <li>App Store Deployment</li>
                <li>Native Module Integration</li>
              </ul>
            </div>

            <div className="competency-category">
              <h4>Cloud & Backend</h4>
              <ul>
                <li>Firebase (Auth, Firestore, Functions)</li>
                <li>REST/GraphQL API Integration</li>
                <li>Serverless Architectures</li>
                <li>Database Design (NoSQL/SQL)</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="professional-journey">
          <h3 className="section-title">Career Highlights</h3>
          <div className="milestones-grid">

          <div className="certification-card highlighted">
            <div className="cert-header">Advanced Certification</div>
            <h5>JavaScript Algorithms & Data Structures</h5>
            <div className="cert-meta">
              <span className="cert-issuer">freeCodeCamp</span>
              <span className="cert-date">Feb 2025</span>
            </div>
            <div className="cert-id">Credential ID: hatim-kassas-ljaads</div>
            <div className="cert-skills">
              <span>JavaScript</span>
              <span>Algorithms</span>
              <span>Data Structures</span>
            </div>
            <a href="https://www.freecodecamp.org/certification/hatim-kassas/javascript-algorithms-and-data-structures" target="_blank" className="view-credential">View Credential →</a>
          </div>

          <div className="milestone-card">
            <div className="date-badge">2024</div>
            <h5>Lead Mobile Developer @ FlyTech</h5>
            <p>Built fleet management app handling 50k+ daily transactions</p>
            <div className="tech-used">
              <span>Flutter</span>
              <span>Firebase</span>
              <span>Google Maps API</span>
            </div>
          </div>

          <div className="milestone-card">
            <div className="date-badge">2023</div>
            <h5>Frontend Developer @ SendATrack</h5>
            <p>Optimized tracking dashboard reducing load times by 40%</p>
            <div className="tech-used">
              <span>React</span>
              <span>TypeScript</span>
              <span>WebSockets</span>
            </div>
          </div>

          <div className="milestone-card education-card">
            <div className="date-badge">2022</div>
            <h5>WebForce3 Certification</h5>
            <p>Full Stack Development Diploma</p>
            <div className="education-details">
              <div className="education-item">
                <strong>Frontend:</strong> Bootstrap, React, Angular
              </div>
              <div className="education-item">
                <strong>Backend:</strong> Symfony, Laravel, Python, SQL
              </div>
              <div className="education-item">
                <strong>Mobile:</strong> Java, Flutter
              </div>
              <div className="education-item">
                <strong>Web Culture:</strong> Agile, UX Principles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}