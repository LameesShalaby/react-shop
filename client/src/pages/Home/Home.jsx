import React from 'react'
import './Home.css'
import Slider from '../../components/Slider/Slider';
import slides from '../../slider.json';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Category from '../../components/Category/Category';


const Home = () => {
  return (
    <>
      <Slider slides={slides}/>
      <FeaturedProducts type="featured"/>
      <div className="home-category">
      <Category/>
      </div>
      <div className='home-bottom'>
      <FeaturedProducts type={"trending"}/>
      </div>
      </>
  )
}

export default Home