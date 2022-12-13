import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3234638/pexels-photo-3234638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cactus",
      desc: "From statuesque favorites such as the Swiss Cheese plant and Kentia palm to the smaller but just as spectacular Calathea and Anthuriums, you can learn how to make confident",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3153522/pexels-photo-3153522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6954409/pexels-photo-6954409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Encephalartus",
      desc: "From statuesque favorites such as the Swiss Cheese plant and Kentia palm to the smaller but just as spectacular Calathea and Anthuriums, you can learn how to make confident",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ]
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart