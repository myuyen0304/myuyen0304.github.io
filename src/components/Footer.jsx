export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          Copyright 2026 myuyen0304
        </span>
        <button className="footer__back" onClick={scrollTop}>
          Back to top
        </button>
      </div>
    </footer>
  )
}
