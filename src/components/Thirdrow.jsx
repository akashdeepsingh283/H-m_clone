import React from 'react'
import {useContext} from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

const Thirdrow = () => {
  const {isDarkMode}=useContext(DarkModeContext);
  return (
    <div className={isDarkMode?'thirdnavdarkmode':'thirdnav'}>
      <div>Free shipping above &#8377;1900 </div>
      <div>Free and flexible 15 days return </div>
      <div>Estimated delivery time:2-7 days</div>
    </div>
  )
}

export default Thirdrow
