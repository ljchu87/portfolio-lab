import { projects } from "../../data/project"
import ProjectList from "../../components/ProjectList/ProjectList"
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <>
      <h1 className={styles.linearWipe}>Projects</h1>
      <h4 className={styles.projectHeader2}>Checkout some of my recent projects below!</h4>
      <div className={styles.socialContainer}>
        <a href="https://www.linkedin.com/in/leon-chu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-linkedin.svg" alt="LinkedIn Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://twitter.com/ljchu" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-twitter.svg" alt="Twitter Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://github.com/ljchu87" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-github-squared.svg" alt="GitHub Logo" class={styles.hvrPulse} />
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-mail.svg" alt="Email Logo" class={styles.hvrPulse} />
        </a>
      </div>
      <ProjectList projects={projects} />
    </>
  )
}

export default Projects