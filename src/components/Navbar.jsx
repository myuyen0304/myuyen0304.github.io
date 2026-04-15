export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <span className="navbar__logo">myuyen</span>
        <ul className="navbar__links">
          {['about', 'skills', 'projects', 'contact'].map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s) }}>
                {s}
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
