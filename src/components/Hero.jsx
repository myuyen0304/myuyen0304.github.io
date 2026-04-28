export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Open to fresher backend roles</div>

          <h1 className="hero__title">
            Mỹ Uyên
            <span>Backend Fresher</span>
          </h1>

          <p className="hero__sub">
            Information Systems student focused on Node.js, NestJS, TypeScript,
            REST APIs, and Docker. I am building practical backend projects
            while preparing for my first professional software role.
          </p>

          <div className="hero__meta" aria-label="Core profile">
            <span>Information Systems</span>
            <span>Node.js / NestJS</span>
            <span>Docker</span>
            <span>Postman</span>
          </div>

          <div className="hero__actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Projects
              <ArrowIcon />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>
            <a
              className="btn btn-ghost"
              href="https://github.com/myuyen0304"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero__panel" aria-label="Portfolio summary">
          <p className="hero__panel-label">Focus</p>
          <h2>Backend APIs, data flow, and containerized local setups.</h2>
          <div className="hero__panel-list">
            <span>Graduation project: high-concurrency ticketing</span>
            <span>Microservices chat with RabbitMQ and Socket.IO</span>
            <span>API testing and documentation with Postman</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
