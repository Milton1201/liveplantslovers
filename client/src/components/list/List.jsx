import React from 'react'
import './list.scss'
import Card from '../card/Card'
const List = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3234638/pexels-photo-3234638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cactus",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3153522/pexels-photo-3153522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6954409/pexels-photo-6954409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Encephalartus",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/912396/pexels-photo-912396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Utus",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/305558/pexels-photo-305558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/961897/pexels-photo-961897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Spine Encephalus",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ]

  return (
    <div className="list">{data?.map(item => (
      <Card item={item} key={item.id} />))}
    </div>
  )
}

export default List