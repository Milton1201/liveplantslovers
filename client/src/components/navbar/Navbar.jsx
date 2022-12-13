import React, { useState } from 'react'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import './navbar.scss'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            {/* <img src="/images/en.png" alt="language" /> this language component can be avoided */}
            <span>EN</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>

          <div className="item">
            <Link className='link' to="/products/1">Terrestrial</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Acquatic</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Tropical</Link>
          </div>
        </div>

        <div className="center">
          <Link className='link' to="/">LIVEPLANTSLOVERS</Link>
        </div>


        <div className="right">
          <div className="item">
            <Link className='link' to="/">Home</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <a className='link' href="mailto:noramuller00@gmail.com" >Email</a>
          </div>
          <div className="item">
            <a className='link' href="tel: +27 724-018-341">+27 724 018 341</a>
          </div>
          <div className="icon">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)} >
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>

        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar