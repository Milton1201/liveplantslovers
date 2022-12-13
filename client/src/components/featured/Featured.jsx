import React from 'react'
import Card from '../card/Card'
import './featured.scss'
import useFetch from '../middleware/useFetch';


const Featured = ({ type }) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Being around greenery offers many mental health benefits.
          Horticultural therapy has long been used to treat mental
          health and other conditions. It helps improve memory,
          cognition and socialization. Humans also have
          an innate instinct to connect with nature, known as biophilia.
        </p>
      </div>

      <div className="bottom">
        {error ? "Something went wrong..." : (loading ? "Loading..." : data?.map((item) => (
          <Card item={item} key={item.id} />)
        ))}
      </div>
    </div>
  )
}

export default Featured