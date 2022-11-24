import styles from './Resume.module.css'


const Resume = () => {
  return (
    <>
      <h1 className={styles.headerAbout}>Resume</h1>
      <h2 className={styles.headerAbout2}>Checkout my resume below to stay up-to-date with my work!</h2>
      <iframe className={styles.myPDF} src="Leon_Chu_resume.pdf" frameborder="0"></iframe>
    </>
  )
}

export default Resume