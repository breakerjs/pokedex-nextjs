import Link from 'next/link'

export default function Navbar () {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid ">
          <Link href="/">
          <a className="navbar-brand mb-0 h1">PokeNextJS</a>
          </Link>
        </div>
      </nav>
    )
}
