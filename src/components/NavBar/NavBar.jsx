// import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
      // <nav>
      //     <div className={styles.container}>
      //       <NavLink to='/'>HOME</NavLink>
      //       <NavLink to='about'>ABOUT</NavLink>
      //       <NavLink to='resume'>RESUME</NavLink>
      //       <NavLink to='projects'>PROJECTS</NavLink>
      //       <NavLink to='contact'>CONTACT</NavLink>
      //     </div>  
      // </nav>

    <ul>
      <div className={styles.container}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </ul>

  )
}

export default NavBar