const projects = [
  {
    num: '01',
    title: 'High-Concurrency Concert Ticketing System',
    desc: 'Graduation project for an online ticketing system. The project explores high-traffic booking problems, double-booking prevention, Redis distributed locks, virtual waiting room flow, and performance testing with k6.',
    highlight: 'Graduation project with backend system design focus',
    tech: ['Node.js', 'Redis', 'Docker', 'Kubernetes', 'k6'],
    link: 'https://github.com/myuyen0304/KLTN-High-Concurrency-Concert-Ticketing-System',
  },
  {
    num: '02',
    title: 'Real-Time Chat Microservices',
    desc: 'A chat application structured with a frontend, Nginx gateway, user service, chat service, mail service, and RabbitMQ message broker. It documents authentication, OTP email flow, Socket.IO messaging, and Docker Compose setup.',
    highlight: 'Shows API, realtime, queue, and container practice',
    tech: ['TypeScript', 'Node.js', 'Socket.IO', 'RabbitMQ', 'Docker'],
    link: 'https://github.com/myuyen0304/real-time-chat-microservices',
  },
  {
    num: '03',
    title: 'Fashion E-Commerce System',
    desc: 'A modular monolith e-commerce learning project with authentication, product catalog, cart, orders, payment integration, reviews, avatar upload, and realtime chat support.',
    highlight: 'Practice project for end-to-end web application flows',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.IO'],
    link: 'https://github.com/myuyen0304/CNM-Fashion-System',
  },
  {
    num: '04',
    title: 'Collaborative MVC Web Application',
    desc: 'A team project built with the MVC pattern. My work involved understanding the existing code structure, contributing to feature flow across model, controller, and view layers, and coordinating changes with teammates.',
    highlight: 'Team-based project, repository not hosted on my GitHub',
    tech: ['MVC', 'Team collaboration', 'Web application', 'Git'],
    link: null,
  },
  {
    num: '05',
    title: 'MSSQL Data Warehouse Pipeline',
    desc: 'A data-focused project around SQL Server data warehouse concepts, ETL processing, data modeling, and analytics. It connects my Information Systems background with backend data work.',
    highlight: 'Connects IS knowledge with database practice',
    tech: ['SQL Server', 'T-SQL', 'ETL', 'Data Modeling'],
    link: 'https://github.com/myuyen0304/End-to-End-Data-Pipeline-Data-Warehouse-in-MSSQL',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected projects</h2>
        <p className="section-sub">
          These projects are not professional work experience. They show how I
          learn backend development, system thinking, and team-based web
          application work.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.num} className="project-card">
              <div className="project-card__number">Project {p.num}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__highlight">{p.highlight}</div>
              <div className="project-card__tech">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-card__link">
                  View repository
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ) : (
                <span className="project-card__note">Private / collaborative project</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
