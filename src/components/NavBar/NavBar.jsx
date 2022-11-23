import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
      <nav>
          <div className={styles.container}>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='about'>ABOUT</NavLink>
            <NavLink to='resume'>RESUME</NavLink>
            <NavLink to='projects'>PROJECTS</NavLink>
            <NavLink to='contact'>CONTACT</NavLink>
          </div>  
      </nav>
  )
}

export default NavBar