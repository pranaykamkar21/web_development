import { useState } from 'react'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}>
        IPL 2026 Tickets
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#matches" onClick={closeMenu}>Matches</a>
        <a href="#book-ticket" onClick={closeMenu}>Book Ticket</a>
      </nav>
    </header>
  )
}
