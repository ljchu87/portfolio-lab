import styles from './Contact.module.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_fgmk0o8', e.target, 'AXd88tIs6uvGCX3iJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <>
      <h1 className={styles.contactHeader}>Contact</h1>
      <h3 className={styles.contactSubHeader}>Send me an email and let's connect!</h3>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 mx-auto'>
            <div className='col-8 form-group pt-2 mx-auto'>
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <input type="email" className="form-control" placeholder="E-mail Address" name="email" />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <textarea className="form-control" name="message" id="" cols="30" rows="8"></textarea>
            </div>
            <div className='col-8 pt-3 mx-auto'>
              <input type="submit" className="btn btn-outline-light" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact