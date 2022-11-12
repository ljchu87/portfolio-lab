import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
      <nav className={styles.container}>
          <NavLink to='/'>Leon Chu</NavLink>
          <ul>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='resume'>Resume</NavLink></li>
            <li><NavLink to='projects'>Projects</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink> </li> 
          </ul>     
      </nav>
  )
}

export default NavBar