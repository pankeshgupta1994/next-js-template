import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/template'>Template</Link>
        </li>
        <li>
          <Link href='/study'>Study</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
