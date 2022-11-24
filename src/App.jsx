import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contacts/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App;
