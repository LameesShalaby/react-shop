import React, { useState, useEffect } from 'react';
import './CatInfo.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const CatInfo = () => {
  const { id } = useParams();
  const categoryId = parseInt(id); 

  const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(`/categories/${categoryId}?populate=*`);
  const { data: productsData, loading: productsLoading, error: productsError } = useFetch(`/products?/products?populate=*&filters[categories]=${categoryId}&populate=*`);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData);
    }
  }, [categoryData]);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData]);

  if (categoryLoading || productsLoading) {
    return <p>Loading...</p>;
  }

  if (categoryError || productsError) {
    return <p>Error: {categoryError?.message || productsError?.message}</p>;
  }

  return (
    <>
    <section className='cat-section'>
        <div className='banner-style'>
          <div className="row">
    <img className="category-banner"
         src={`http://localhost:1337${category?.attributes?.banner?.data?.attributes?.url}`}
         alt={category?.attributes.title}
    />
     <h2 className='cat-title animate__animated animate__fadeInDown animate__delay-1s	'>{category?.attributes?.title} Products</h2>
            </div>  
        </div>
    </section>
    <section className="productsInfo">
      <div className="container">

        <div className="row align-items-center">
          {products.map((product) => (
            <div className="col-lg-4 mb-4 cat-products-details" key={product.id}>
             <Link to={`/products/${product.id}`}>
              <img
                className="category-image animate__animated animate__fadeInUp animate__delay-1s	"
                src={`http://localhost:1337${product.attributes.img.data.attributes.url}`}
                alt={product.attributes.title}
              />
              <h6 className='animate__animated animate__fadeInUp animate__delay-2s	'>{product.attributes.title}</h6>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
};

export default CatInfo;