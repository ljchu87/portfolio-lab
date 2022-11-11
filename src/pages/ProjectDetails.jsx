import findProject from "../utilities/findProject"
import { useParams } from "react-router-dom"


const ProjectDetails = () => {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  
  return (
    <>
    <div>
      <div>
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <a href={project.githubLink} rel="noreferrer" target="_blank">
          <button>GitHub Repo</button>
        </a>
        <a href={project.deployedLink}>
          <button>Deployed Website</button>
        </a>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails