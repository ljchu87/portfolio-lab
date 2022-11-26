import styles from './Resume.module.css'


const Resume = () => {
  return (
    <>
    <div className={styles.resumeContainer}>
      <h1 className={styles.headerAbout}>Resume</h1>
      <h4 className={styles.headerAbout2}>Checkout my resume below to stay up-to-date with my work!</h4>
      <iframe className={styles.myPDF} src="Leon_Chu_resume.pdf" frameborder="0" title="myResume"></iframe>
    </div>
    </>
  )
}

export default Resume