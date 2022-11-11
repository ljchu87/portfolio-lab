import { projects } from "../data/project"
import ProjectList from "../components/ProjectList"

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </>
  )
}

export default Projects