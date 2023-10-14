import React, { useState, useEffect } from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, loading, error } = useFetch("/categories?populate=*");

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    draggable:true,
    onSwipe:null,
    pauseOnDotsHover:true,
    touchMove:true,
    loop:true,
    className: 'category-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="category-height">
      <div className="container">
        <h1 className="animate__animated animate__fadeInDown animate__delay-1s">Categories</h1>
        <Slider {...settings} >
          {categories.map((category) => (
            <div className="cat-item" key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <div className="category-img animate__animated animate__fadeInUp animate__delay-1s">
                  <img
                    className="category-image"
                    src={`http://localhost:1337${category.attributes.img.data.attributes.url}`}
                    alt={category.attributes.name}
                  />
                </div>
                <div className="cat-details animate__animated animate__fadeInUp animate__delay-2s">
                  <h5 className="category-title btn">
                    {category.attributes.title}
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default Categories;