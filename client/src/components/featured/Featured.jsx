import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/Card'
import './featured.scss'
const Featured = ({ type }) => {


  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(process.env.REACT_APP_API_URI+"/products?populate=*", {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN ,
          }
        });

        setData(res.data.data);
      }catch(err){
        console.log(err);
      }
    };

    fetchData()
  }, [])
  
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
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Featured