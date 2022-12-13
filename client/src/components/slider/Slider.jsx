import React, { useState } from 'react'
import './slider.scss'
import WestOulinedIcon from '@mui/icons-material/WestOutlined'
import EastOulinedIcon from '@mui/icons-material/EastOutlined'
const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/544112/pexels-photo-544112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="slider">
      <div className="container" style={{
        transform: `translateX(-${currentSlide * 100}vw)`
      }}>
        <img src={data[0]} alt="product" />
        <img src={data[1]} alt="product" />
        <img src={data[2]} alt="product" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOulinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOulinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider