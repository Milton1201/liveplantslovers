import React from 'react'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import Featured from '../../components/featured/Featured'
import Slider from '../../components/slider/Slider'
import './home.scss'
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Categories />
      <Featured type="trending" />
      <Contact />
    </div>
  )
}

export default Home