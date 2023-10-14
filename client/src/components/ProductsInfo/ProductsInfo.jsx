import React, { useState, useEffect, useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import "./productsInfo.css";
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import Popup  from '../Popup/Popup';

const ProductsInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*&`);
  // const { data, loading, error } = useFetch(`/products/${id}?[filters][id][$eq]=${id}&populate=*`);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState("img");


  useEffect(() => {
    if (data) {
      setProduct(data);
    console.log(data)
    }
  }, [data]);
  
  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.attributes?.title,
          desc: product.attributes?.desc,
          price: product.attributes?.price,
          image: product.attributes?.img?.data?.attributes?.url,
          quantity,
        })
      );
    }
  };

  return (
    <>
      <section className="productsInfo">
        <div className="container">
          <div className="row align-items-center">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <>
                <div className="left col-6">
                <div className="images">
                  <img
                    src={`http://localhost:1337${product?.attributes?.img?.data?.attributes?.url}`}
                    alt=""
                    onClick={() => setSelectedImg("img")}
                  />
                  <img
                    src={`http://localhost:1337${product?.attributes?.img2?.data?.attributes?.url}`}
                    alt=""
                    onClick={() => setSelectedImg("img2")}
                  />
                </div>
                <div className="mainImg">
                  <img
                   src={`http://localhost:1337${data?.attributes[selectedImg]?.data?.attributes?.url}`} alt=""
                  />
                </div>
              </div>

                {/* <div className="col-lg-6 mb-4">
                  <img
                    className="product-image"
                    src={`http://localhost:1337${product?.attributes?.img?.data?.attributes?.url}`}
                    alt={product?.attributes?.title}
                  />
                </div> */}
                <div className='col-lg-6 ml-lg-5'>
                  <h3 className="product-title">{product?.attributes?.title}</h3>
                  <hr/>
                  <h5 className="product-price">$ {product?.attributes?.price}</h5>
                  <hr/>
                  <h5 className='des-title'>Design Description:</h5>
                  <p className="product-des">{product?.attributes?.desc}</p>
                  <hr/>
                  {/* <Link to={`/categories/${product?.attributes.categories?.data[0]?.attributes?.id}`}> */}
                  <p>Category: <span style={{ color: '#088178',textTransform: 'capitalize' }}>{`${product?.attributes.categories?.data[0]?.attributes?.title}`}</span></p>
                  {/* </Link> */}
                  <div className='pricing'>
                  <div className="quantity">
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    <h4>{quantity}</h4>
                   <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                  </div>
                  <div>
                  <button
                    className="btn"
                    onClick={handleAddToCart} > Add to cart
                  </button>
                  </div>
                  </div>
                  <div className="links">
                 <div className="item">
                 <FaRegStar />
                 <p>ADD TO WISH LIST</p>
              </div>
              <hr/>
              <div className='share'>
                <Popup/>
              </div>
            </div>
                </div>
              </>
            )}
          </div>
       </div>
       </section>
       <section>
        <div className="container">
          <div className="row">
          <RelatedProducts currentProductId={product?.id} categoryID={product?.attributes.categories?.data[0]?.id}/>
          </div>
        </div>
       </section>
    </>
  );
};

export default ProductsInfo;