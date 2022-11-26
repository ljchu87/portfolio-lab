import { projects } from "../../data/project"
import ProjectList from "../../components/ProjectList/ProjectList"
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <>
      <h1 className={styles.projectsHeader}>Projects</h1>
      <ProjectList projects={projects} />
    </>
  )
}

export default Projects