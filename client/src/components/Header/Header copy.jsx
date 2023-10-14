import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/white-logo.png';
import logoBlue from '../../assets/white-logo.png';
import './Header.css';
import Cart from '../cart/Cart';
// import { Link } from 'react-router-dom';
import Search from '../Search/Search'
import {FaSearch} from 'react-icons/fa'
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";

const Header = () => {

    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)
    //logo scroll when active
    const [navbarLogo, setNavbarLogo] = useState(logo)
    //navbar scroll changeBackground function
    const changeBackground = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
    //logo scroll function
    const changeLogo = () => {
      if (window.scrollY >= 60) {
        setNavbarLogo(logoBlue)
      } else {
        setNavbarLogo(logo)
      }
    }
    useEffect(() => {
      changeLogo()
      // adding the event when scroll change Logo
      window.addEventListener("scroll", changeLogo)
    })
    const [showSearch, setShowSearch]=useState(false)


    const { user } = useAuthContext();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      removeToken();
      navigate("/signin", { replace: true });
    };
  
  return(
    <>
    <div className="bg-body-dark navbar-light position" sticky="to" >
    <Navbar expand="lg" className={navbar ? "navbar active navbar-dark" : "navbar"}>
      <Container className='px-2'>
        <Navbar.Brand href="/"><img src={navbarLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products2">Products</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/categories/1">Men</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/2">Women</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/3">Boys</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/4">Girls</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/registration">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <FaSearch className='search-icon' onClick={()=>setShowSearch(true)}/>
          {showSearch && <Search setShowSearch={setShowSearch}/>}
        </Navbar.Collapse>

        <Cart/>  
      </Container>
    </Navbar>
    <>
         <div className="header_space">
          <Button className="header_space_brand" href="/" type="link">
            <CgWebsite size={64} />
          </Button>
          <div className="auth_buttons">
            {user ? (
              <>
                <Button className="auth_button_login" href="/profile" type="link">
                  {user.username}
                </Button>
                <Button
                  className="auth_button_signUp"
                  type="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
              <Button className="auth_button_login btn" href="/signin" type="link">
                Login
              </Button>
              <Button
                className="auth_button_signUp btn"
                href="/signup"
                type="primary"
              >
                SignUp
              </Button>
              </>
            )}
          </div>
        </div>
    </>
  </div>
    {/* <section className='header header-area header-sticky'>
      <div className='container'>
        <div className='row align-items-baseline'>
          <div className='col-lg-4'>
            <div className='logo my-3'>
            <Link to="/">
            <img src={whiteLogo} alt='' />
            </Link>
              
            </div>
          </div>
          <div className='col-lg-8'>
            <ul className='d-flex nav'>
            <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/products">Products</Link>
              </li>
              <li>
              <Link to="/categories">Categories</Link>
              </li>
              <li className='scroll-to-section'>
                <a href=''>Men's Shopping</a>
              </li>
              <li className='scroll-to-section'>
                <a href=''>Women's Shopping</a>
              </li>
              <li className='scroll-to-section'>
                <a href=''>Kid's Shopping</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> */}
    </>

  );
};

export default Header;