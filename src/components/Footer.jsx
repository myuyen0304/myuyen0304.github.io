export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          © 2025 myuyen0304 — built with React + Vite
        </span>
        <span className="footer__back" onClick={scrollTop}>
          Back to top ↑
        </span>
      </div>
    </footer>
  )
}
