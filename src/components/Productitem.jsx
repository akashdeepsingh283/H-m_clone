import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { DarkModeContext } from '../context/DarkModeContext';

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <Link to={`/product/${id}`} className={isDarkMode ? 'link-dark' : 'link-light'}>
        <div className={`itemcard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <img className='cards' src={image} alt={name} />
          <p>{name}</p>
          <p>{currency}{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Productitem;
