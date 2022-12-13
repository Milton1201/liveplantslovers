import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Aquatic</span>
          <span>Terrestrial</span>
          <span>Tropical</span>
          <span>Desert</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Not only do indoor plants enhance the
            overall appearance of a space, but studies show they
            boost moods, increase creativity, reduce
            stress, and eliminate air pollutants—making
            for a healthier, happier you.
          </span>
        </div>
        <div className="item">
          <h1>Get In Touch</h1>
          <span>
            Science has proven that having plants
            in your indoors can have many benefits
            to the body and mind. Several scientific
            studies have concluded that
            plants can affect an individual’s
            emotional and behavioral characteristics.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">
            LIVEPLANTSLOVERS
          </span>
          <span className="copyright">© Copyright 2022. All Rights Reserved</span>
        </div>
        <div className="right">
          <img className='bottomImg' src="/images/payment.png" alt="payment methods" />
        </div>
      </div>
    </div>
  )
}

export default Footer