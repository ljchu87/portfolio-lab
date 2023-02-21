import styles from './Resume.module.css'

const Resume = () => {
  return (
    <>
    <div className={styles.resumeContainer}>
      <h1 className={styles.linearWipe}>Resume</h1>
      <h4 className={styles.headerAbout2}>Checkout my resume below to stay up-to-date with my work!</h4>
      <div className={styles.socialContainer}>
        <a href="https://www.linkedin.com/in/leon-chu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-linkedin.svg" alt="LinkedIn Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://github.com/ljchu87" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-github-squared.svg" alt="GitHub Logo" class={styles.hvrPulse} />
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-mail.svg" alt="Email Logo" class={styles.hvrPulse} />
        </a>
      </div>
      <iframe className={styles.myPDF} src="Leon-Chu_Resume.pdf" frameborder="0" title="myResume"></iframe>
    </div>
    </>
  )
}

export default Resume