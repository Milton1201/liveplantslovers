import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img src={process.env.REACT_APP_UPLOAD_URI+item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={process.env.REACT_APP_UPLOAD_URI+item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
        </div>

        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 10}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card