import styles from './Resume.module.css'


const Resume = () => {
  return (
    <>
    <div className={styles.resumeContainer}>
      <h1 className={styles.headerAbout}>Resume</h1>
      <h4 className={styles.headerAbout2}>Checkout my resume below to stay up-to-date with my work!</h4>
      <div className={styles.socialContainer}>
        <a href="https://www.linkedin.com/in/leon-chu/">
          <img src="/images/icons8-linkedin.svg" alt="LinkedIn Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://twitter.com/ljchu">
          <img src="/images/icons8-twitter.svg" alt="Twitter Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://github.com/ljchu87">
          <img src="/images/icons8-github-squared.svg" alt="GitHub Logo" class={styles.hvrPulse} />
        </a>
      </div>
      <iframe className={styles.myPDF} src="Leon_Chu_resume.pdf" frameborder="0" title="myResume"></iframe>
    </div>
    </>
  )
}

export default Resume