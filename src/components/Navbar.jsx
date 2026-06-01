export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
        >
          Mỹ Uyên
        </a>
        <ul className="navbar__links">
          {[
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Case Studies' },
            { id: 'contact', label: 'Contact' },
          ].map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={(e) => { e.preventDefault(); scrollTo(s.id) }}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/myuyen0304"
          target="_blank"
          rel="noreferrer"
          className="navbar__cta"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
