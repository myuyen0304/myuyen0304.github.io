const skillGroups = [
  {
    icon: '01',
    title: 'Engineering',
    tags: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'Docker'],
  },
  {
    icon: '02',
    title: 'Business analysis',
    tags: ['Requirements analysis', 'User flows', 'Feature breakdown', 'Acceptance thinking'],
  },
  {
    icon: '03',
    title: 'API & testing',
    tags: ['API documentation', 'Postman', 'Test scenarios', 'Request/response flow'],
  },
  {
    icon: '04',
    title: 'Data & systems',
    tags: ['MongoDB', 'SQL Server', 'Redis basics', 'Data modeling', 'Data flow'],
  },
  {
    icon: '05',
    title: 'System exposure',
    tags: ['MVC pattern', 'Microservices', 'RabbitMQ', 'Socket.IO', 'CI/CD basics'],
  },
  {
    icon: '06',
    title: 'Working habits',
    tags: ['README docs', 'Debugging notes', 'Git/GitHub', 'Team coordination'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">A practical mix of engineering and BA skills</h2>
        <p className="section-sub">
          I keep my skills grounded in project work: understanding the feature,
          documenting the flow, implementing the backend, and checking the
          behavior through APIs and scenarios.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="skill-card__header">
                <div className="skill-card__icon">{group.icon}</div>
                <span className="skill-card__title">{group.title}</span>
              </div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
