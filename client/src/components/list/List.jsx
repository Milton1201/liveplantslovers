import React from 'react'
import './list.scss'
import Card from '../card/Card';
import useFetch from '../middleware/useFetch';

const List = ({
  maxPrice, sort, catId, subCats
}) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map((item) =>
    `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}`);

  return (
    <div className="list">
      {loading ?
        "Loading..."
        : data?.map((item) => (
          <Card item={item} key={item.id} />))}
    </div>
  )
}

export default List