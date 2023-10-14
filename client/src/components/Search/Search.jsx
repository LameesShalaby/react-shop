import {React, useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWindowClose } from "react-icons/fa";
import './Search.css';
import { useFetch } from '../../hooks/useFetch';
const Search = ({setShowSearch}) => {
    const[query , setQuery]=useState("")
    const navigate= useNavigate()
    const [item, setItem] = useState(null);

    const onChange =(e)=>{
        setQuery(e.target.value);
    }
    let {data} = useFetch(`/products?populate=*&filters[title][$contains]=${query}`)
    if(!query.length){
        data = null;
    }
    
    useEffect(() => {
        if (data) {
          setItem(data);
        console.log(data)
        }
      }, [data]);
    console.log(data)
  return (
    <div className='search-modal'>
        <div className='form-field'>
            <input
            type='text'
            autoFocus
            placeholder='Search for products'
            value={query}
            onChange={onChange}
            />
            <FaWindowClose onClick={()=>setShowSearch(false)}/>
        </div>
        <div  className='search-result-content'>
            <div className="search-result">
             {item?.map((item) => (
                <div key={item.id} className="search-result-item" onClick={()=>{
                    navigate("/products/"+item.id)
                    setShowSearch(false)
                }}>
                <div className="img-container">
                    <img src={`http://localhost:1337${item?.attributes?.img?.data?.attributes?.url}`} alt={item?.attributes?.name} />
                </div>
                <div className="prod-details">
                    <span className='name'>{item.attributes.title}</span>
                    <span className='desc'>{item.attributes.desc}</span>
                </div>
            </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Search