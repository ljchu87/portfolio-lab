import ProjectPreview from "../ProjectPreview"
import styles from './ProjectList.module.css'

const ProjectList = ({projects}) => {
  return (
    <>
      <section className={styles.projectListContainer}>
        {projects.map((project, i) =>
          <ProjectPreview key={i} title={project.title} image={project.image} />
        )}
      </section>
    </>
  )
}

export default ProjectList