import React from 'react';
import "./Products.css";
import { useFetch } from "../../hooks/useFetch";
import Spinner from 'react-bootstrap/Spinner';
import Card from '../Card/Card';

const Products = ({}) => {
  const {data,loading} = useFetch(`/products?populate=*&'}
  `);
  return (
    <section className='products'>
      <div className='container'>
        {loading
        ?<div className='d-flex justify-content-center'>
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
         </div>
        : 
        data?.map((item) => 
          <Card key={item.id} item={item}  />
        )}   
      </div>
    </section>
  );
};

export default Products;


// import { useState, useEffect, useContext } from 'react'
// import { useFetch } from '../../hooks/useFetch'
// import storeContex from '../../hooks/storeContex'
// import "./Products.css"
// import { addToCart } from '../../redux/cartReducer'
// import { useDispatch } from 'react-redux'
// import Categories from '../Categories/Categories'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import Spinner from 'react-bootstrap/Spinner';
// import { FaCartPlus } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";

// const Products = () => {
//   const [products, setProducts] = useState([])
//   const { filter } = useContext(storeContex)
//   const { data, loading, error } = useFetch(filter)
//   const dispatch = useDispatch()
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log(data);
//     data && setProducts(data);
//   }, [data]);

//   return (
//     <>
//       {/* <section className='products-banner'>
//         <div className='banner-desc'>
//           <h1>Check Our Products</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, minima?</p>
//         </div>
//       </section> */}
//       <section className='section-padding'>
//       <div className="container">
//       <div className="row d-flex">
//         {/* <div className="col-lg-3 left">
//         <section className='cat-section'>
//         <Categories/>
//         </section>
//         </div> */}
//         <div className="col-lg-12">
//         <section className='products'>
//           <div className='container '>
//             <div className="row align-items-center">
//               {loading ? (
//                 <>
//                 <div className='d-flex justify-content-center'>
//                       <Spinner animation="border" variant="primary" />
//                       <Spinner animation="border" variant="secondary" />
//                       <Spinner animation="border" variant="success" />
//                       <Spinner animation="border" variant="danger" />
//                       <Spinner animation="border" variant="warning" />
//                       <Spinner animation="border" variant="info" />
//                       <Spinner animation="border" variant="light" />
//                       <Spinner animation="border" variant="dark" />
//                 </div>
//     </>
//               ) : (
//                 <>
//                   {products.map((product) => (
//                     <div className='product col-lg-4 mb-4' key={product.id}>
//                       <Link to={`/products/${product.id}`}>
//                         <h5 className='product-price'>{product.attributes.price}</h5>
//                         <div className='product-img'>
//                         <img className='product-image' src={`http://localhost:1337${product?.attributes?.img.data?.attributes?.url}`} alt={product.attributes.name} />
//                         </div>
//                         <h6>{product.attributes.isFeatured}</h6>
//                       </Link>
//                       <div className='icons-info'>
//                       <Link to={`/products/${product.id}`}>
//                         <div className="icon-color"><FaRegEye/></div>
//                       </Link>
//                       <button className='addtocart'
//                         onClick={() => dispatch(addToCart({
//                           id: product.id,
//                           title: product.attributes.title,
//                           desc: product.attributes.desc,
//                           price: product.attributes.price,
//                           image: product.attributes.img.data.attributes.url,
//                         }))}
//                         ><FaCartPlus/></button>
//                         </div>
//                     </div>
//                   ))}
//                   <button className="btn" onClick={() => navigate(-1)}>
//                     Go Back
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </section>
//       </div>
//       </div>
//       </div>
//       </section>
//     </>
//   )
// }

// export default Products