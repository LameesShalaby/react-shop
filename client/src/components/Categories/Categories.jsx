import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Categories.css';
import Checkbox from '../CheckBox/Checkbox';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const catId = parseInt(id);
  const { data, loading } = useFetch(
    `/categories?[filters][categories][id][$eq]=${catId}`
  );

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <>
      <div className='left'>
          <h2>Product Categories</h2>
          <div className='categories'>
        {loading ? (
          "Loading..."
        ) : (
          categories.map((category) => (
            <div className='cat-item' key={category.id}>
              <Checkbox category={category} />
            </div>
          ))
        )}
          </div>
      </div>
    </>
  );
};

export default Categories;