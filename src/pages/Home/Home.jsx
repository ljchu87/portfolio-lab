import styles from './Home.module.css'

const Home = () => {
  return (
    <>
    <div className={styles.home}>
        <h1>Leon Chu</h1>
        <h2>Full-stack Software Engineer</h2>
        <img src="images/Leon.jpg" alt="Leon" />
      </div>
    </>
  )
}

export default Home