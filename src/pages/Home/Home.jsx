import styles from './Home.module.css'
import TypeWriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
    <div className={styles.home}>
      <div className={styles.hero}>
        <h2 className={styles.header1}>Hi there! My name is</h2>
        <h1 className={styles.header2}>Leon Chu</h1>
        <div className={styles.app}>
        <TypeWriter 
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a software engineer.")
                .pauseFor(300)
                .deleteAll()
                .typeString("A problem solver.")
                .pauseFor(300)
                .deleteAll()
                .typeString("A creator.")
                .pauseFor(300)
                .deleteAll()
                .typeString("A dog dad.")
                .pauseFor(300)
                .deleteAll()
                .typeString("A fitness enthusiast.")
                .pauseFor(300)
                .deleteAll()
                .typeString("A plant dad.")
                .pauseFor(300)
                .deleteAll()
                .start()
            }}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home