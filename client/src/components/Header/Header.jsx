import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/white-logo.png';
import logoBlue from '../../assets/white-logo.png';
import './Header.css';
import Cart from '../cart/Cart';
import Search from '../Search/Search'
import {FaSearch} from 'react-icons/fa'
import Login from '../Login/Login';

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
            {/* <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/registration">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            </NavDropdown> */}
            <Login/>
          </Nav>
          <FaSearch className='search-icon' onClick={()=>setShowSearch(true)}/>
          {showSearch && <Search setShowSearch={setShowSearch}/>}
        </Navbar.Collapse>

        <Cart/>  
      </Container>
    </Navbar>
    <>
    </>
  </div>
    </>

  );
};

export default Header;