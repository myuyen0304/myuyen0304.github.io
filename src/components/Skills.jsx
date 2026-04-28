const skillGroups = [
  {
    icon: '01',
    title: 'Backend',
    tags: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs'],
  },
  {
    icon: '02',
    title: 'Web fundamentals',
    tags: ['HTML', 'CSS', 'JavaScript', 'React basics'],
  },
  {
    icon: '03',
    title: 'Data & storage',
    tags: ['MongoDB', 'SQL Server', 'Redis basics', 'Data modeling'],
  },
  {
    icon: '04',
    title: 'Tools',
    tags: ['Docker', 'Docker Compose', 'Postman', 'Git', 'GitHub'],
  },
  {
    icon: '05',
    title: 'Project exposure',
    tags: ['MVC pattern', 'Microservices', 'RabbitMQ', 'Socket.IO', 'CI/CD basics'],
  },
  {
    icon: '06',
    title: 'Working habits',
    tags: ['API testing', 'README docs', 'Debugging', 'Learning notes'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Skills I use in projects</h2>
        <p className="section-sub">
          I keep the stack focused on backend fundamentals and the tools I have
          used in school and personal repositories.
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
