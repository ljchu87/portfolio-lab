import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
      <nav>
        <NavLink to='/' className={styles.home}>
          <img src="/images/home.png" alt="home-logo" />
        </NavLink>
          <div className={styles.container}>
            <NavLink to='about'>ABOUT</NavLink>
            <NavLink to='resume'>RESUME</NavLink>
            <NavLink to='projects'>PROJECTS</NavLink>
            <NavLink to='contact'>CONTACT</NavLink>
          </div>  
      </nav>
  )
}

export default NavBar