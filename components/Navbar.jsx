import style from '../components/Navbar.module.css'
import Link from 'next/link'

function navbar() {
  return (
    <nav className={style.navbar}>
        <ul className={style.list}>
            <li>
                <Link href="/">About</Link>
            </li>
            <li>
                <Link href="/">Contact</Link>
            </li>
            <li>
                <Link href="/">Resumé</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar