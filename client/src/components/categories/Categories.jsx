import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scss'
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/3126312/pexels-photo-3126312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prdt img" />
          <button>
            <Link className='link' to='/products/1'>Sale</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1865392/pexels-photo-1865392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prdt img" />
          <button>
            <Link className='link' to='/products/1'>Aquatic</Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/3075352/pexels-photo-3075352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prdt img" />
          <button>
            <Link className='link' to='/products/1'>Dessert</Link>
          </button>
        </div>
      </div>

      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/3505000/pexels-photo-3505000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prdt img" />
              <button>
                <Link className='link' to='/products/1'>Terrestrial</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/1516877/pexels-photo-1516877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prdt img" />
              <button>
                <Link className='link' to='/products/1'>New Season</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1337316/pexels-photo-1337316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prdt img" />
          <button>
            <Link className='link' to='/products/1'>Promotion</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories