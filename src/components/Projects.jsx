const projects = [
  {
    num: '01',
    title: 'Real-Time Chat Microservices',
    desc: 'A chat application structured with a frontend, Nginx gateway, user service, chat service, mail service, and RabbitMQ message broker.',
    engineering: 'Implemented and documented service interaction across auth, OTP email, Socket.IO, RabbitMQ, and Docker Compose.',
    ba: 'Mapped registration, login, OTP, and messaging flows so API behavior and service responsibilities are clear.',
    tech: ['TypeScript', 'Node.js', 'Socket.IO', 'RabbitMQ', 'Docker'],
    link: 'https://github.com/myuyen0304/real-time-chat-microservices',
  },
  {
    num: '02',
    title: 'Fashion E-Commerce System',
    desc: 'A modular monolith e-commerce learning project with authentication, product catalog, cart, orders, payment integration, reviews, avatar upload, and realtime chat support.',
    engineering: 'Built backend modules for account, catalog, cart, order, payment, review, upload, and chat behavior.',
    ba: 'Broke down the customer journey from browsing products to checkout, payment, review, and support chat.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.IO'],
    link: 'https://github.com/myuyen0304/CNM-Fashion-System',
  },
  {
    num: '03',
    title: 'Collaborative MVC Web Application',
    desc: 'A team project built with the MVC pattern. My work involved understanding the existing code structure, contributing to feature flow across model, controller, and view layers, and coordinating changes with teammates.',
    engineering: 'Contributed within an existing MVC structure and coordinated code changes with teammates.',
    ba: 'Practiced reading feature intent, tracing model-controller-view behavior, and clarifying flow before editing.',
    tech: ['MVC', 'Team collaboration', 'Web application', 'Git'],
    link: null,
  },
  {
    num: '04',
    title: 'MSSQL Data Warehouse Pipeline',
    desc: 'A data-focused project around SQL Server data warehouse concepts, ETL processing, data modeling, and analytics. It connects my Information Systems background with backend data work.',
    engineering: 'Practiced SQL Server modeling, T-SQL processing, ETL structure, and data warehouse implementation.',
    ba: 'Connected source data, transformation rules, and analytical needs into a clearer data flow.',
    tech: ['SQL Server', 'T-SQL', 'ETL', 'Data Modeling'],
    link: 'https://github.com/myuyen0304/End-to-End-Data-Pipeline-Data-Warehouse-in-MSSQL',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="section-label">Case studies</p>
        <h2 className="section-title">Projects shown through engineering and BA evidence</h2>
        <p className="section-sub">
          These projects are not professional work experience. They show how I
          learn by combining backend development, requirement thinking, user
          flow analysis, API documentation, and practical testing.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.num} className="project-card">
              <div className="project-card__number">Project {p.num}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__focus-grid">
                <div className="project-card__focus">
                  <span>Engineering</span>
                  <p>{p.engineering}</p>
                </div>
                <div className="project-card__focus project-card__focus--ba">
                  <span>BA focus</span>
                  <p>{p.ba}</p>
                </div>
              </div>
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
