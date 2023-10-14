import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import storeContex from './hooks/storeContex';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import AppRoutes from "./Routes";

export const ThemeContext = createContext(null);

function App() {
  const [filter, setFilter] = useState('products?populate=*');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
        <div className="switch">
            <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
         <Header />
          <storeContex.Provider value={{ filter, setFilter, selectedCategories,    setSelectedCategories }}>
          <AppRoutes />
          </storeContex.Provider>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;