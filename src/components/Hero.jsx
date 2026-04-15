export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero__title">
          Hi, I'm <span className="highlight">Uyen My</span><br />
          Backend Developer
        </h1>

        <p className="hero__sub">
          I build scalable backend systems and APIs — from microservices
          architecture to containerized deployments on cloud infrastructure.
        </p>

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
            Get in touch
          </button>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-line" />
          scroll to explore
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
