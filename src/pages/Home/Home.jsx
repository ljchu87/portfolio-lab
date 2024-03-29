import styles from './Home.module.css'
import TypeWriter from 'typewriter-effect'

const Home = () => {  
  return (
    <>
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.header1}>Hello, my name is</div>
        <div className={styles.linearWipe}>Leon Chu</div>
        <div className={styles.app}>
        <TypeWriter 
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a software engineer.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a technical support analyst.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a problem solver.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a creator.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a designer.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a dog dad.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a fitness enthusiast.")
                .pauseFor(300)
                .deleteAll()
                .typeString("I'm a plant dad.")
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