const skillGroups = [
  {
    icon: '⚙️',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'NestJS', 'REST API', 'GraphQL'],
  },
  {
    icon: '🌐',
    title: 'Frontend',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    icon: '📦',
    title: 'Containers & Orchestration',
    tags: ['Docker', 'Kubernetes', 'Docker Compose', 'Helm'],
  },
  {
    icon: '🏗️',
    title: 'Architecture',
    tags: ['Microservices', 'REST', 'Message Queue', 'gRPC'],
  },
  {
    icon: '🛠️',
    title: 'DevOps & Tools',
    tags: ['Git', 'GitHub Actions', 'Nginx', 'Linux', 'AWS'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">
          Tools and technologies I use to design, build, and ship backend systems.
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
