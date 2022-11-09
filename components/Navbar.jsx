import style from '../components/Navbar.module.css'

function navbar() {
  return (
    <nav className={style.navbar}>
        <ul className={style.list}>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
            <li>
                Resume
            </li>
        </ul>
    </nav>
  )
}

export default navbar