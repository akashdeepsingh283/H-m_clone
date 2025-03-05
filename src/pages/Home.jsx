import React from 'react'
import Secondrow from '../components/Secondrow'
import Thirdrow from '../components/Thirdrow'
import Firstimage from '../components/Firstimage'
import AD from '../components/AD'
import Themanbanner from '../components/Themanbanner'
import Cards from '../components/Cards'
import Thegirlbanner from '../Thegirlbanner'
import Denim from '../components/Denim'
import Lastimage from '../components/lastimage'
import Bottom from '../components/Bottom'
import Latestcollection from '../components/Latestcollection'
import {useContext} from 'react'
import { DarkModeContext } from '../context/Darkmodecontext'

const Home = ({darkmodehome}) => {
  const {isDarkMode}=useContext(DarkModeContext);
  return (
    <div className={isDarkMode?'darkhome':''}>
      <Thirdrow />
      <Firstimage/>
      <AD/>
      <Themanbanner/>
      <Cards/>
      <Thegirlbanner/>
      <Denim/>
      <Lastimage/>
    </div>
  )
}

export default Home
