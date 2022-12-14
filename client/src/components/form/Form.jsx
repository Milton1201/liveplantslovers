import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import MessengerIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './form.css';
const Form = () => {
  return (
    <div className="form">
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <EmailIcon className='contact__icon' />
            <h4>Email</h4>
            <h5>noramuller@gmail.com</h5>
            <a href="mailto:oramuller@gmail.com" target='_blank' className='email'>Send an Email</a>
          </article>

          <article className="contact__option">
            <MessengerIcon className='contact__icon' />
            <h4>Messenger</h4>
            <h5>liveplantslovers</h5>
            <a href="https://m.me/profile" target='_blank' className='email'>Send a Message</a>
          </article>

          <article className="contact__option">
            <WhatsAppIcon className='contact__icon' />
            <h4>WhatsApp</h4>
            <h5>Nora Muller</h5>
            <a href="https://web.whatsapp.com/send?phone+275656474656" target='_blank' className='email'>+27 000 75758</a>
          </article>
        </div>

        {/* end of contact options */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <textarea name="message" rows="10" placeholder='Type Message' required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Form