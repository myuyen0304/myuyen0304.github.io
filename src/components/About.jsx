const stats = [
  { num: '2+',  label: 'Years Experience' },
  { num: '10+', label: 'Projects Delivered' },
  { num: '15+', label: 'REST APIs Built' },
  { num: '99%', label: 'Uptime Target' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">Building systems that scale</h2>
            <p className="section-sub">
              I'm a Backend Developer focused on designing reliable, maintainable server-side
              systems. I work across the full backend stack — REST APIs, microservices,
              containerization, and cloud deployments.
            </p>
            <p className="section-sub" style={{ marginTop: 16 }}>
              I enjoy breaking monoliths into clean microservices, optimizing API performance,
              and shipping with Docker and Kubernetes to keep things consistent from dev to prod.
            </p>

            <div className="about__stats">
              {stats.map((s) => (
                <div key={s.label} className="about__stat">
                  <div className="about__stat-num">{s.num}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <div className="about__avatar">
              <span style={{ position: 'relative', zIndex: 1 }}>👩‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
