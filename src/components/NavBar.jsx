import { NavLink } from "react-router-dom"

function NavBar() {
  return (
      <nav>
          <NavLink to='/'>
            Leon Chu
          </NavLink>
          <NavLink to='about'>
            About
          </NavLink>
          <NavLink to='resume'>
            Resume
          </NavLink>
          <NavLink to='projects'>
            Projects
          </NavLink>
          <NavLink to='contact'>
            Contact
          </NavLink>        
      </nav>
  )
}

export default NavBar