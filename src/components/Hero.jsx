export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Open to fresher hybrid roles</div>

          <h1 className="hero__title">
            Mỹ Uyên
            <span>Engineer + BA</span>
          </h1>

          <p className="hero__sub">
            Information Systems student who connects software engineering with
            business analysis. I build backend APIs and also map requirements,
            user flows, data flow, API behavior, and testing scenarios so a
            feature is clear before and after implementation.
          </p>

          <div className="hero__meta" aria-label="Core profile">
            <span>Information Systems</span>
            <span>Node.js / NestJS</span>
            <span>Requirements Analysis</span>
            <span>API Documentation</span>
            <span>Postman Testing</span>
          </div>

          <div className="hero__actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Case Studies
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
          <p className="hero__panel-label">Hybrid focus</p>
          <h2>Turning product flows into documented, testable backend systems.</h2>
          <div className="hero__panel-list">
            <span>Analyze booking, chat, commerce, and data workflows</span>
            <span>Design API/data flow before implementation</span>
            <span>Validate behavior with Postman, README docs, and test scenarios</span>
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
