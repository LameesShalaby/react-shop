import { useState } from 'react';
import './Cart.css';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';
import { fetchApi } from '../../hooks/fetchApi';
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await fetchApi.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <div
        className={`cart ${isCartOpen ? 'open' : ''}`}
        onClick={handleCartClick}
      >
        <div className='cart-icon'>
          <FaShoppingCart />
        </div>
        <div className='cart-badge'>{products.length}</div>
        {isCartOpen && (
          <ul className='cart-list'>
            <h5>Products in your cart</h5>
            {products.map((item) => (
              <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <li className='cart-item'>
                    <img
                      className='cart-item-image'
                      src={`http://localhost:1337${item.image}`}
                      alt=''
                    />
                    <div className='details'>
                      <h1 className='cart-item-title'>{item.title}</h1>
                      <p className=''>{item.desc?.substring(0, 60)}</p>
                      <div className='cart-item-price'>
                        {item.quantity} x ${item.price}
                      </div>
                    </div>
                    <span
                      className='cart-item-remove'
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <FaTrash />{' '}
                    </span>
                  </li>
                </Link>
              </div>
            ))}
            <div className='position-sticky'>
            <div className='total'>
              <span>TOTAL PRICE</span>
              <span>${totalPrice()}</span>
            </div>
            <span className='checkout btn' onClick={handlePayment}>PROCEED TO CHECKOUT</span>
            <span className='reset' onClick={() => dispatch(resetCart())}>
              Reset Cart
            </span>
            </div>
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;