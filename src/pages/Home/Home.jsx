import styles from './Home.module.css'
import TypeWriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
    <div className={styles.home}>
      <div className={styles.hero}>
        <h2>Hi there! My name is</h2>
        <h1>Leon Chu</h1>
        <div className={styles.app}>
          <TypeWriter 
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a software engineer.")
                .pauseFor(500)
                .deleteAll()
                .typeString("I'm a dog dad.")
                .pauseFor(500)
                .deleteAll()
                .typeString("I'm a fitness enthusiast.")
                .pauseFor(500)
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