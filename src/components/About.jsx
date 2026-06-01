const stats = [
  { num: 'IS', label: 'Academic background' },
  { num: '27', label: 'Public GitHub repos' },
  { num: 'API', label: 'Engineering evidence' },
  { num: 'Flow', label: 'BA thinking' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">
              A hybrid fresher who can read the problem and build the flow
            </h2>
            <p className="section-sub">
              I am a final-year Information Systems student preparing for my
              first professional role. My strongest direction is the space
              between business requirements and backend implementation:
              understanding what a feature needs to do, mapping the user and
              data flow, then turning that into APIs, database behavior, and
              testable scenarios.
            </p>
            <p className="section-sub" style={{ marginTop: 16 }}>
              My portfolio is project-based rather than work-experience based.
              I use GitHub projects to show how I learn from both sides:
              analyzing requirements and edge cases like a BA, then building
              and documenting the technical flow like an engineer.
            </p>
            <p className="section-sub" style={{ marginTop: 16 }}>
              I want to join a team where I can contribute to APIs, databases,
              documentation, and testing while learning how real products are
              planned, validated, shipped, and improved with users in mind.
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
