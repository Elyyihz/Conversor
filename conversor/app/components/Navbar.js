import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="nav-logo">Conversor Universal</Link>
        <div className="nav-links">
          <Link href="/sobre" className="nav-link">Sobre</Link>
          <Link href="/conversor-moeda" className="nav-link">Moeda</Link>
          <Link href="/conversor-temperatura" className="nav-link">Temperatura</Link>
          <Link href="/conversor-medidas" className="nav-link">Medidas</Link>
        </div>
      </div>
    </nav>
  )
}