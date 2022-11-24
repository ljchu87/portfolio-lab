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
                .typeString("I'm a software engineer 💻")
                .pauseFor(500)
                .deleteAll()
                .typeString("A problem solver 💡")
                .pauseFor(500)
                .deleteAll()
                .typeString("A creator 💭")
                .pauseFor(500)
                .deleteAll()
                .typeString("A dog dad 🐶")
                .pauseFor(500)
                .deleteAll()
                .typeString("A fitness enthusiast 💪🏼")
                .pauseFor(500)
                .deleteAll()
                .typeString("A plant dad 🪴")
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