import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
    <Link className="link" to={`/Products/${item?.id}`}>
      <div className="card animate__animated animate__fadeInUp animate__delay-1s">
        <div className="image">
          {item?.attributes?.isNew && <span>New Season</span>}
          <img
            src={`http://localhost:1337${item?.attributes?.img?.data?.attributes?.url}`} alt={item?.attributes?.name}
            className="mainImg"
          />
          <img
            src={`http://localhost:1337${item?.attributes?.img2?.data?.attributes?.url}`} alt={item?.attributes?.name}
            className="secondImg"
          />
        </div>
        
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3>${item?.attributes?.price}</h3>
          <h3>${ item?.attributes?.price + 20 || item?.oldPrice }</h3>
        </div>
      </div>
    </Link>
    </>

  );
};

export default Card;