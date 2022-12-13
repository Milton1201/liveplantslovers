import React from 'react'
import { useState } from 'react';
import './product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4844092/pexels-photo-4844092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Succulent Plants In Brown Pots</h1>
        <span className='price'>$199</span>
        <p>
          In botany, succulent plants,
          also known as succulents, are plants with
          parts that are thickened, fleshy, and engorged,
          usually to retain water in arid climates or
          soil conditions. The word succulent
          comes from the Latin word sucus, meaning "juice" or "sap"
        </p>

        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} >-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)} >+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Nora Muller Stores</span>
          <span>Product Type: Acquatic & Something</span>
          <span>Tag: Plant, Water, Succulent</span>
        </div>

        <hr />

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product