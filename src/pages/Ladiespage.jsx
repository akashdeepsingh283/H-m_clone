import React, { useEffect } from 'react'
import {useContext} from 'react'
import {ShopContext} from '../context/ShopContext';
import {useState} from 'react'
import Productitem from '../components/Productitem';


const Ladiespage = () => {
    const {products,search,setsearch}=useContext(ShopContext);
    const [ladiesdata, setladiesdata] = useState([]);
    const [category, setcategory] = useState([]);
    const [sorttype, setsorttype] = useState('Relevant');
    const togglecategory=(e)=>{
        if(category.includes(e.target.value)){
            setcategory(prev=>prev.filter((item)=>item!==e.target.value));
        }else{  
            setcategory(prev=>[...prev,e.target.value]);
        }
    }
    const applyfilter=()=>{
      let productscopy=products.filter((item)=>item.category==='Women').slice();
      if (search) {
        productscopy=productscopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
      }
      if(category.length>0){
      productscopy=productscopy.filter(item=>category.includes(item.subCategory ));

      
    }
    setladiesdata(productscopy);
  }

    useEffect(()=>{
      applyfilter();
    }),[category,products,search]

    useEffect(() => {
      setladiesdata(products.filter((item)=>item.category==='Women'));
  }, [])

  const sortdata=()=>{
    if(ladiesdata.length>0){
    let fp=ladiesdata.slice();
    switch(sorttype){
      case 'low-high':
        fp.sort((a,b)=>(a.price-b.price));
        break;
    
      case 'high-low':
        fp.sort((a,b)=>(b.price-a.price));
        break;

      default:
        applyfilter();
        break;  
  }
  setladiesdata(fp);
  }
};


  useEffect(()=>{
    sortdata();
  },[sorttype,ladiesdata])



  return (
    <div className='fullpage'>
      <div className='leftside'>
        
        <h1>Filters</h1>
        <div className='boxes'>
        <h3>Type</h3>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
          }}
        >
          <li>
            <input type
            ="checkbox" name="category" value={'Bottomwear'} onChange={togglecategory}
            ></input>
            <label htmlFor="category">Bottomwear</label>
          </li>
          <li>
            <input type
            ="checkbox" name="category" value={'Topwear'} onChange={togglecategory}
            ></input>
            <label htmlFor="category">Top-wear</label>
          </li>
          <li>
            <input type
            ="checkbox" name="category" value={'Winterwear'} onChange={togglecategory}
            ></input>
            <label htmlFor="category">Winter wear</label>
          </li>
        </ul>
        </div>
        
      </div>
      <div className='rightside'>
      <div className='righttop'>
        <h1>Collections</h1>
        <select className='selectbox' onChange={(e)=>setsorttype(e.target.value)}>
          <option value="Relevant">Sort by:Relevant</option>
          <option value="low-high">Sort by:low-high</option>
          <option value="high-low">Sort by:high-low</option>
        </select>
      </div>
      
    <div className='prodcontainer'>
      {
        ladiesdata.map((item,index)=>(
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
    </div>
    </div>
    </div>
  )
}

export default Ladiespage
