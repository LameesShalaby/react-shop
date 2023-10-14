// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

// export default function SwiperSlider() {
//   return (
//     <Carousel
//       autoPlay
//       infiniteLoop
//       showThumbs={true}
//       showStatus={true}
//       showIndicators={true}
//     //   interval={2500}
//       centerMode
//     //   transitionTime="9000" 
//       centerSlidePercentage={100}
//       className="myCarousel"
//     >

//       <div>
//         <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Slide 1" />
//       </div>
//       <div>
//         <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Slide 2" />
//       </div>
//       <div>
//         <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Slide 3" />
//       </div>
//       <div>
//         <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Slide 4" />
//       </div>
//       <div>
//         <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Slide 5" />
//       </div>
//     </Carousel>
//   );
// }


import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SwiperSlider = ({ images }) => {
    return (
        <div className="sticky">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >

      <div>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Slide 3" />
      </div>
      <div>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Slide 4" />
      </div>
      <div>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Slide 5" />
      </div>
            </Carousel>
        </div>
    );
};

export default SwiperSlider;


// import React, { useEffect, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useFetch } from '../../hooks/useFetch';
// import { Carousel } from "react-responsive-carousel";
// import { useParams } from 'react-router-dom';

// const SwiperSlider = () => {
//   const { id } = useParams();
//   const { data, loading, error } = useFetch(`/products?populate=*`);  
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (data) {
//       setProduct(data);
//     }
//   }, [data]);

//   return (
//     <div className="sticky">
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <Carousel
//           infiniteLoop={true}
//           showIndicators={false}
//           showStatus={false}
//           thumbWidth={60}
//           className="productCarousel"
//         >
//           {product && (
//             <div key={product.id}>
//               {product.img2 && (
//                 <img  src={`http://localhost:1337${product?.attributes?.img?.data?.attributes?.url}`}
//                 alt={product.name} />
//               )}
//             </div>
//           )}
//         </Carousel>
//       )}
//     </div>
//   );
// };

// export default SwiperSlider;