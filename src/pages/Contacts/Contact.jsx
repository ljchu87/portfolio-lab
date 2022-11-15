import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>Reach out if you'd like to work with me!</p>
      <div className={styles.contacts}>
        <a href="mailto:ljchu87@gmail.com">Email Me!</a>
        <a href="https://www.linkedin.com/in/leon-chu/">LinkedIn</a>
        <a href="https://github.com/ljchu87">GitHub</a>
      </div>
    </>
  )
}

export default Contact