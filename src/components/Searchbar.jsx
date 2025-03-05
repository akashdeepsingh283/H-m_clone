import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import searchicon from '/search.svg';
import { DarkModeContext } from '../context/Darkmodecontext';

const Seachbar = () => {
  const { search, setsearch } = useContext(ShopContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div>
        <div className={isDarkMode ? 'searchbox darkmodenav' : 'searchbox'}>
          <img className='searchicon' src={searchicon} alt="" />
          <input
            className={isDarkMode ? 'searchbar darkmodenav' : 'searchbar'}
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder='Search'
          />
        </div>
      </div>
    </>
  );
}

export default Seachbar;
