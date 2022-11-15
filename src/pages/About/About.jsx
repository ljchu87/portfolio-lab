import styles from './About.module.css'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <div className={styles.about}>
        <img src="images/Leon.jpg" alt="Leon" className='profile' />
          <div>
            <p>
              Hi there! I'm a full-stack software engineer with an interest in utilizing MongoDB, Express.js, React.js, and Node.js to build fun and innovative web applications with clean and dry code. I believe in the importance of continually growing and expanding my skills as an engineer, so I enjoy challenging myself to learn new things and understand complex problem-solving concepts. 
              I'm particularly interested in growing my skillset in React and expanding on the knowledge I'm continuously learning to this day! Outside of work, I enjoy being a dog dad or hitting the gym. I'm currently seeking opportunities as a full-stack or front-end developer so let's connect and grow together!
            </p>
          </div>
        </div>
    </>
  )
}

export default About