import {useContext, useEffect} from 'react';
import './Checkbox.css';
import qs from "qs";
import storeContex from '../../hooks/storeContex'
const Checkbox = ({category}) => {
    const{setFilter, selectedCategories, setSelectedCategories}=useContext(storeContex);

    useEffect(()=>{
      const query =qs.stringify({
        filters:{
          categories:{
            id:{
              $in: selectedCategories
            }
          }
        }
      })
      setFilter("http://localhost:1337/api/products?populate=*&" + query)
    },[selectedCategories])

    const handelFilterCategory =(e)=>{
      const selectedID = e.target.dataset.category
      const isChecked = e.target.checked

      setSelectedCategories(selectedCategories =>{
      if(isChecked) return [...selectedCategories, selectedID]
      return selectedCategories.filter(id => id !== selectedID)
      })
    //  setFilter("http://localhost:1337/api/products?populate=*&filters[categories][id][$in][0]=2&filters[categories][id][$in][1]=3")
        // setFilter("http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=" + e.target.dataset.category)
    }
  return (
    // <div>
    //   <img className='category-image' src={`http://localhost:1337${category.attributes.img.data.attributes.url}`} 
    //   alt={category.attributes.name} />        
    //     <div>{category.attributes.title}</div>
    //     <div>{category.attributes.desc}</div>
    //     <div>{category.attributes.price}</div>
    // </div>
    <section className='checkbox'>
    <div className='col p-0'>
    <label className="toggler-wrapper style">
    <input 
    type="checkbox" 
    data-category={category.id}
    onChange={handelFilterCategory}
    />
    <div className="toggler-slider">
      <div className="toggler-knob"></div>
    </div>
  <div className="badge">{category.attributes.title}</div>
  </label>
  </div>
  </section>
  )
}

export default Checkbox