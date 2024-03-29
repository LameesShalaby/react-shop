import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from 'react'

const Slider = ({ slides }) => { 
    const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  // console.log('selected index: ', selectedIndex)
  setIndex(selectedIndex);
};
        return (
        <Carousel activeIndex={index}
        onSelect={handleSelect}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
        >
        {slides.map((slide) => (
        <Carousel.Item key={slide.image} interval={slide.interval}>
            <img
            className="d-block w-100"
            src={slide.image}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className='carousel-title'>{slide.title}</h3>
            <p className='carousel-p'>{slide.subTitle}</p>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>
        );
}

export default Slider;