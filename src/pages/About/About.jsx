import styles from './About.module.css'

const About = () => {
  return (
    <>
      <h1 className={styles.linearWipe}>About</h1>
      <h4 className={styles.aboutHeader2}>Get to know me a little better.</h4>
      <div className={styles.socialContainer}>
        <a href="https://www.linkedin.com/in/leon-chu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-linkedin.svg" alt="LinkedIn Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://twitter.com/ljchu" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-twitter.svg" alt="Twitter Logo" class={styles.hvrPulse} />
        </a>
        <a href="https://github.com/ljchu87" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-github-squared.svg" alt="GitHub Logo" class={styles.hvrPulse} />
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons8-mail.svg" alt="Email Logo" class={styles.hvrPulse} />
        </a>
      </div>
      <div className={styles.about}>
        <img src="images/Leon.jpg" alt="Leon" className='profile' />
          <div>
            <p>
              Hi there! I'm a full-stack software engineer with an interest in utilizing MongoDB, Express.js, React.js, and Node.js to build fun and innovative web applications with clean and dry code. I believe in the importance of continually growing and expanding my skills as an engineer, so I enjoy challenging myself to learn new things and understand complex problem-solving concepts.
            </p>
            <p>
              I'm particularly interested in growing my skillset in React and expanding on the knowledge I'm continuously learning to this day! Outside of work, I enjoy being a dog dad or hitting the gym. I'm currently seeking opportunities as a full-stack or front-end developer so let's connect and grow together!
            </p>
          </div>
        </div>
    </>
  )
}

export default About