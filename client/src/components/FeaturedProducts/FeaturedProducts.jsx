import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.css";
import { useFetch } from '../../hooks/useFetch'
import 'animate.css';
import Spinner from 'react-bootstrap/Spinner';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const FeaturedProducts = ({type}) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}&pagination[start]=0&pagination[limit]=5`
  )
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    className:'featured-slider',
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
    <>
    <section className="featured">
      <div className="container">
        <div className="top">
          <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-2s">
          <h1> {...type} products</h1>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight animate__delay-2s" duration=".8s" delay="1s" iterationCount="infinite">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.
          </p>
          </div>
        </div>
        <div className="bottom">
        <Slider {...settings} className='featured-slider'>
            {loading
            ?<div className='d-flex justify-content-center'>
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
            </div>
            : 
            data?.map((item) => 
            <Card item={item} key={item?.id} />
            )} 
          </Slider>
        </div>
      </div>
    </section>

    </>

  );
};

export default FeaturedProducts;