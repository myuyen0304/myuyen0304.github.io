const projects = [
  {
    num: '01',
    title: 'Microservices E-Commerce API',
    desc: 'Decomposed a monolithic e-commerce app into independent microservices (auth, product, order, payment). Services communicate via REST and message queues, each deployed as a separate container.',
    highlight: 'Reduced deployment time by 60%',
    tech: ['Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'RabbitMQ'],
    link: '#',
  },
  {
    num: '02',
    title: 'Real-time Chat System',
    desc: 'Scalable chat backend with WebSocket support, room management, and message persistence. Handles concurrent connections with horizontal scaling via Kubernetes and Redis pub/sub.',
    highlight: 'Supports 1000+ concurrent connections',
    tech: ['Node.js', 'Socket.io', 'Redis', 'MongoDB', 'Docker'],
    link: '#',
  },
  {
    num: '03',
    title: 'REST API Gateway',
    desc: 'Centralized API gateway handling authentication, rate limiting, request routing, and logging across multiple backend services. Built with a plugin-based architecture for extensibility.',
    highlight: 'Single entry point for 10+ services',
    tech: ['Node.js', 'Express', 'JWT', 'Redis', 'Nginx'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-sub">
          A selection of backend projects — APIs, microservices, and distributed systems.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.num} className="project-card">
              <div className="project-card__number">Project {p.num}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__highlight">→ {p.highlight}</div>
              <div className="project-card__tech">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <a href={p.link} className="project-card__link">
                View project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
