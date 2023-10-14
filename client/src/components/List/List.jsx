import React from "react";
import "./List.css";
import Card from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
import Spinner from 'react-bootstrap/Spinner';

const List = ({ subCats, maxPrice, sort, catId, categories , colors}) => {
  const {data,loading} = useFetch(`/products?populate=*&[categories][filters][id]${catId}${categories.map((item)=> `&[filters][categories][id][$eq]=${item}`)}&${catId}${subCats.map((item)=> `&[filters][subcategories][id][$eq]=${item}`)}&${colors}${colors.map((item)=> `&[filters][colors][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort || 'asc'}
  `);
  
  return (
    <div className="list">
      {loading
        ?<div className='d-flex justify-content-center'>
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
         </div>

        : data?.map((item) => 
        <Card item={item} key={item.id} />
        )}
    </div>
  );
};

export default List;