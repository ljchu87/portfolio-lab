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
        <img src="images/Leon-Pic.jpg" alt="Leon" className='profile' />
          <div>
            <p>
              Hi there! I'm a full-stack software engineer with a backfround in the oil and gas industry working in tech support. I have a huge interest in utilizing MongoDB, Express.js, React.js, and Node.js to build fun and innovative web applications with clean and dry code. I believe in the importance of continually growing and expanding my skills as an engineer, so I enjoy challenging myself to learn new things and understand complex problem-solving concepts.
            </p>
            <p>
              I'm particularly interested in growing my skillset in React and expanding on the knowledge I'm continuously learning to this day! Outside of work, I enjoy being a dog dad or hitting the gym. I'm currently seeking opportunities as a full-stack developer or technical analyst so let's connect and grow together!
            </p>
            <p className={styles.techStackHeader}>
              Tech Stack:
            </p>
            <p className={styles.techStack}>
              <img src="/images/icons8-javascript-logo.svg" alt="JavaScript logo" class={styles.hvrPulse} />
              <img src="/images/icons8-html-5.svg" alt="HTML logo" class={styles.hvrPulse} />
              <img src="/images/icons8-css3.svg" alt="CSS logo" class={styles.hvrPulse} />
              <img src="/images/icons8-python.svg" alt="Python logo" class={styles.hvrPulse} />
              <img src="/images/icons8-c++.svg" alt="C++ logo" class={styles.hvrPulse} />
              <img src="/images/icons8-mongodb.png" alt="MongoDB logo" class={styles.hvrPulse} />
              <img src="/images/icons8-react-native.svg" alt="React logo" class={styles.hvrPulse} />
              <img src="/images/icons8-express-js.svg" alt="Express logo" class={styles.hvrPulse} />
              <img src="/images/icons8-node-js-50.svg" alt="Node logo" class={styles.hvrPulse} />
              <img src="/images/icons8-django.svg" alt="Django logo" class={styles.hvrPulse} />
              <img src="/images/icons8-postgresql.svg" alt="PostgreSQL lgoo" class={styles.hvrPulse} />
              <img src="/images/icons8-mysql-logo.svg" alt="MySQL logo" class={styles.hvrPulse} />
              <img src="/images/icons8-visual-studio.svg" alt="VisualStudio logo" class={styles.hvrPulse} />
              <img src="/images/icons8-docker.svg" alt="Docker logo" class={styles.hvrPulse} />
              <img src="/images/icons8-github-badge.svg" alt="GitHublogo" class={styles.hvrPulse} />
            </p>
          </div>
        </div>
    </>
  )
}

export default About