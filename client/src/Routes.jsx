import { Routes, Route, Navigate } from "react-router-dom";
import Products from './components/Products/Products';
import Category from './components/Category/Category';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductsInfo from './components/ProductsInfo/ProductsInfo';
import Contact from './pages/Contact Us/Contact';
import Items from './components/Items/Items';
import CatInfo from './components/CatInfo/CatInfo';
import Profile from "./components/Profile/Profile";
import { getToken} from "./helpers";
import SignIn from "./pages/SingIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Registration from "./components/Registration/Registration";

const AppRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />} />
     <Route path="/products/:id" element={<ProductsInfo />} />
     <Route path="/categories" element={<Category />} />
     <Route path="/categories/:id" element={<CatInfo />} />
     <Route path="/products2" element={<Items />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/signin" />}
      />

    </Routes>
  );
};

export default AppRoutes;