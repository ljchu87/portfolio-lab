import findProject from "../../utilities/findProject"
import { useParams } from "react-router-dom"
import styles from './ProjectDetails.module.css'


const ProjectDetails = () => {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  
  return (
    <>
      <div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.detailsHeader}>{project.title}</h1>
          <img src={project.image} alt={project.title} className={styles.projImg} />
          <p className={styles.projDescription}>{project.description}</p>
          <div className={styles.projButtons}>
            <a href={project.githubLink} rel="noreferrer" target="_blank">
              <button type="button" class="btn btn-outline-light">GitHub Repo</button>
            </a>
            <a href={project.deployedLink}>
              <button type="button" class="btn btn-outline-light">Deployed Website</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails