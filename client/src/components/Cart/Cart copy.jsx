import { useState } from 'react';
import './Cart.css';
import { FaShoppingCart, FaTrash} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [isCartHovered, setIsCartHovered] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setIsCartHovered(false);
  };

  const handleCartHover = () => {
    setIsCartHovered(!isCartHovered);
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
        className={`cart ${isCartHovered ? 'hovered' : ''}`}
        onClick={handleCartClick}
        onMouseEnter={handleCartHover}
        onMouseLeave={handleCartHover}
      >
        <div className='cart-icon'>
          <FaShoppingCart />
        </div>
        <div className='cart-badge'>{products.length}</div>
        {isCartHovered && (
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

            <div className='total'>
              <span>TOTAL PRICE</span>
              <span>${totalPrice()}</span>
            </div>
            <span className='reset btn' onClick={() => dispatch(resetCart())}>
              Reset Cart
            </span>
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;