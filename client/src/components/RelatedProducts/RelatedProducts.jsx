import { useFetch } from '../../hooks/useFetch';
import Card from '../Card/Card';
import Spinner from 'react-bootstrap/Spinner';
import './RelatedProducts.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProducts = ({ currentProductId, categoryID }) => {

  const { data, loading } = useFetch(
    `/products?populate=*&filters[categories][id]=${categoryID}&pagination[start]=0&pagination[limit]=4`
  );

  // Filter out the current product from the data
  const filteredData = data ? data.filter(item => item.id !== currentProductId) : [];

  console.log(filteredData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    draggable: true,
    onSwipe: null,
    pauseOnDotsHover: true,
    touchMove: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="related-products">
      <h1 className="pb-5" style={{ textAlign: 'center' }}>
        Related Products
      </h1>
      <div className="col d-flex justify-content-center">
      {loading
            ?<div className='d-flex justify-content-center'>
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
            </div>
            : 
            filteredData?.map((item) => 
            <Card item={item} key={item?.id} />
            )} 
      </div>
    </div>
    
    {/* <Slider {...settings} >
          {loading
            ?<div className='d-flex justify-content-center'>
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
            </div>
            : 
            filteredData?.map((item) => 
            <Card item={item} key={item?.id} />
            )} 
     </Slider> */}
     </>

  );
};

export default RelatedProducts;