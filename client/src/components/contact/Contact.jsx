import React from 'react'
import './contact.scss';
import FaceBookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>GET IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder='Enter your email' />
          <button>GET STARTED</button>
        </div>
        <div className="icons">
          <FaceBookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  )
}

export default Contact