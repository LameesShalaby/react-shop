import { useState, useEffect, useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'
import storeContex from '../../hooks/storeContex'
import "./Products.css"
import { addToCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'
// import Categories from './Categories'
// import ProductsInfo from './ProductsInfo'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { FaCartPlus } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



const Products = () => {
  const [products, setProducts] = useState([])
  const { filter } = useContext(storeContex)
  const { data, loading } = useFetch(filter)
  const dispatch = useDispatch()
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const navigate = useNavigate();

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  return (
    <>
      {/* <section className='cat-section'>
        <Categories/>
        </section> */}
      <section className='products-banner'>
        <div className='banner-desc'>
          <h1>Check Our Products</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, minima?</p>
        </div>
      </section>
      <section className='products'>
        <div className='container '>
          <div className="row align-items-center">
            {loading ? (
              <>
              <div className='d-flex justify-content-center'>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="light" />
                    <Spinner animation="border" variant="dark" />
              </div>
                    </>
            ) : (
              <>
                {products.map((product) => (
                  <div className='product col-lg-4 mb-4' key={product.id}>
                    <Link to={`/products/${product.id}`}>
                      {/* <h5 className='product-title'>{product.attributes.title}</h5> */}
                      <h5 className='product-price'>{product.attributes.price}</h5>
                      <div className='product-img'>
                      <img className='product-image' src={`http://localhost:1337${product.attributes.img.data.attributes.url}`} alt={product.attributes.name} />
                      </div>
                      {/* <p className='product-desc'>{product.attributes.desc}</p> */}
                      <h6>{product.attributes.isFeatured}</h6>
                    </Link>
                    <div className='icons-info'>
                    <Link to={`/products/${product.id}`}>
                      <div className="icon-color"><FaRegEye/></div>
                    </Link>
                    <button className='addtocart'
                      onClick={() => dispatch(addToCart({
                        id: product.id,
                        title: product.attributes.title,
                        desc: product.attributes.desc,
                        price: product.attributes.price,
                        image: product.attributes.img.data.attributes.url,
                      }))}
                      ><FaCartPlus/></button>
                      </div>
                  </div>
                ))}

                <button className="btn" onClick={() => navigate(-1)}>
                  Go Back
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products


{/* <div className='row'>
      
{loading 
// Render details of the selected product
? "Loading..." 
: products.map((product) =>(
    <div className='product col-lg-4 mb-4' key={product.id}>
    <h3 className='product-title'>{product.attributes.title}</h3>
    <h5 className='product-price'>{product.attributes.price}</h5>
    <img className='product-image' src={`http://localhost:1337${product.attributes.img.data.attributes.url}`} alt={product.attributes.name} />
    <p className='product-desc'>{product.attributes.desc}</p>
    <h6>{product.attributes.isFeatured}</h6>
    <Link to={`/products/${product.id}`}>
      <div className="btn text-white">View Details</div>
    </Link>
    <button className='btn btn-danger mt-2' 
    onClick={()=>dispatch(addToCart({
      id:product.id,
      title:product.attributes.title,
      desc:product.attributes.desc,
      price:product.attributes.price,
      image:product.attributes.img.data.attributes.url,
    }))}
    >Add to cart</button>
    </div>
    
))

}

</div> */}