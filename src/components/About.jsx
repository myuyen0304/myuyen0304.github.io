const stats = [
  { num: 'IS', label: 'Academic background' },
  { num: '27', label: 'Public GitHub repos' },
  { num: 'API', label: 'Backend focus' },
  { num: 'Docker', label: 'Local deployment practice' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">
              A backend fresher with an Information Systems foundation
            </h2>
            <p className="section-sub">
              I am a final-year student preparing to graduate and looking for a
              fresher backend opportunity. My strongest interest is building
              clear API flows, organizing server-side code, and understanding
              how services connect through databases, queues, and containers.
            </p>
            <p className="section-sub" style={{ marginTop: 16 }}>
              My portfolio is project-based rather than work-experience based.
              I use GitHub projects to show how I learn: reading requirements,
              designing data flow, testing APIs with Postman, and documenting
              how a system can run locally with Docker.
            </p>
            <p className="section-sub" style={{ marginTop: 16 }}>
              My goal is to join a team where I can learn how real products are
              prepared, deployed, and operated in production. I want to grow by
              contributing to larger systems, understanding production
              constraints, and turning backend ideas into usable products.
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
              <span>UM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
