import './Footer.css';
import whiteLogo from '../../assets/white-logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section className='footer pt-5'>
    <div className="container">
    <div className='row align-items-baseline'>
        <div className="col-lg-3 information">
            <div className='logo mb-4'>
                <Link to='/'><img src={whiteLogo} alt="" /></Link>
            </div>
            <div className='info'>
                <p><Link to="https://www.google.com/maps/place/16501+Collins+Ave,+Sunny+Isles+Beach,+FL+33160,+USA/data=!4m2!3m1!1s0x88d9ad187877f857:0x8f1cf8b266e703ba?sa=X&ved=2ahUKEwiilOaMoviAAxWCUkEAHXV9CrkQ8gF6BAgTEAA&ved=2ahUKEwiilOaMoviAAxWCUkEAHXV9CrkQ8gF6BAgWEAI">16501 Collins Ave, Sunny Isles Beach, Fl 33160, United States</Link>
                </p>
                <p><a href='mailto:hexashop@company.com'>hexashop@company.com</a></p>
                <p><a href="tel:010-020-0340">010-020-0340</a></p>

                <div className="d-block">
            <div className="icons">
                <div className="icon">
                <Link className="icon" to="https://www.youtube.com/">
                <FaYoutube/>   
                </Link>
                </div>
                <div className="icon">
                <Link className="icon" to="https://www.instagram.com/">
                <FaInstagram/>   
                </Link>
                </div>
                <div className="icon">
                <Link className="icon" to="https://www.tiktok.com/">
                <FaTiktok/>
                </Link>
                </div>
                <div className="icon">
                <Link className="icon" to="https://www.facebook.com/">
                <FaFacebookF/>
                </Link>
                </div>

            </div>
        </div>
            </div>
        </div>
        <div className="col-lg-3 categories-col">
        <h2>Shopping & Categories</h2>
            <ul className=''>
            <li>
              <Link to="/products2">Products</Link>
              </li>
              <li>
              <Link to="/categories">Categories</Link>
              </li>
            </ul>
        </div>
        <div className="col-lg-3 useful-links">
        <h2>Useful Links</h2>
          <ul className=''>
          <li>
              <Link to="/">Home</Link>
              </li>
            <li className=''>
            <Link to="about">About Us</Link>
            </li>
            <li className=''>
            <Link to="">Help</Link>
            </li>
            <li className=''>
            <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 helpful-links">
        <h2>Help & Information</h2>
        <ul className=''>
            <li className=''><a href=''>Help </a></li>
            <li className=''><a href=''>FAQ's </a></li>
            <li className=''><a href=''>Shipping </a></li>
            <li className=''><a href=''>Tracking ID </a></li>
            </ul>
        </div>
    </div>
    <hr/>
    <div className='copy-right'>
        <p>Copyright {new Date().getUTCFullYear()} HexaShop Co., Ltd. All Right Reserved.</p>

        <div className="d-block">
            <div className="icons">
                <div className="icon">
                <Link className="icon" to="https://www.youtube.com/">
                <FaYoutube/>   
                <p>YouTube</p>
                </Link>
                <p className="dot">.</p>
                </div>
                <div className="icon">
                <Link className="icon" to="https://www.instagram.com/">
                <FaInstagram/>   
                <p>Instagram</p>
                </Link>
                <p className="dot">.</p>
                </div>
                <div className="icon">
                <Link className="icon" to="https://www.tiktok.com/">
                <FaTiktok/>
                <p>TikTok</p>
                </Link>
                <p className="dot instgram-dot">.</p>
                </div>
                <div className="icon">
                <Link className="icon" to="https://www.facebook.com/">
                <FaFacebookF/>
                <p>Facebook</p>
                </Link>
                </div>

            </div>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Footer