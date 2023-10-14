import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/useFetch";
import "./Items.css";

const Items = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedcolors, setSelectedColors] = useState([]);

  const subcategoriesFetch = useFetch(`/subcategories?[categories][filters][id][$eq]=${catId}&populate=*`);
  const categoriesFetch = useFetch(`/categories?[categories][filters][id][$eq]=${catId}&populate=*`);
  const colorsFetch = useFetch(`/colors?[categories][filters][id][$eq]=${catId}&populate=*`);


  const subcategoriesData = subcategoriesFetch.data;
  const categoriesData = categoriesFetch.data;
  const colorsData = colorsFetch.data;

  const handleSubcategoryChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats((prevSubCats) =>
      isChecked ? [...prevSubCats, value] : prevSubCats.filter((item) => item !== value)
    );
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCats((prevCats) =>
      isChecked ? [...prevCats, value] : prevCats.filter((item) => item !== value)
    );
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedColors((prevColorCats) =>
      isChecked ? [...prevColorCats, value] : prevColorCats.filter((item) => item !== value)
    );
  };

  return (
    <>
      <img
        className="catImg"
        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="container">
        <div className="items products">
          <div className="left">
            <div className="filterItem">
              <h2>Product Categories</h2>
              {subcategoriesData?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleSubcategoryChange}
                  />
                  <label htmlFor={item.id}>{item?.attributes?.title}</label>
                </div>
              ))}
              <h2 className="pt-3">Gender</h2>

              {categoriesData?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}

              <h2 className="pt-3">Color</h2>

              {colorsData?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleColorChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.color}</label>
                </div>
              ))}
            </div>
            <div className="filterItem">
              <h2>Filter by price</h2>
              <div className="inputItem">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>

            <div className="filterItem">
              <h2>Sort by</h2>
              <div className="inputItem">
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={(e) => setSort("asc")}
                />
                <label htmlFor="asc">Price (Lowest first)</label>
              </div>
              <div className="inputItem">
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={(e) => setSort("desc")}
                />
                <label htmlFor="desc">Price (Highest first)</label>
              </div>
            </div>
          </div>
          <div className="right">
            <List
              catId={catId}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSubCats}
              categories={selectedCats}
              colors={selectedcolors}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;