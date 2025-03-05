import React from 'react'
import logo from '/logo.svg'
import youtube from '/youtube.svg'
import instagram from '/insta.svg'
import facebook from '/facebook.svg'
import tiktok from '/tiktok.svg'
import pinterest from '/pinterest.svg'
import spotify from '/spotify.svg'

const Bottom = () => {
  return (
    <>
    <div className='mainbottom'>
    <div className='bottom'>
      <div>
        <p className='bottomhead'>SHOP</p>
        <p>Ladies</p>
        <p>Men</p>
        <p>Baby</p>
        <p>Kids</p>
        <p>H&M HOME</p>
        <p>Sport</p>
        <p>Magazine</p>
      </div>
      <div><p className='bottomhead'>CORPORATE INFO</p>
        <p>Career at H&M</p>
        <p>About H&M group</p>
        <p>Sustainibility H&M group</p>
        <p>Press</p>
        <p>Investor Relations</p>
        <p>Corporate Governance</p>
      </div>
      <div>
        <p className='bottomhead'>HELP</p>
        <p>Customer Service</p>
        <p>MY H&M</p>
        <p>Find a store</p>
        <p>Legal & Privacy</p>
        <p>Contact</p>
        <p>Report a scam</p>
        <p>Cookie notice</p>
        <p>Cookie settings</p>
      </div>
      <div className='rand'>
        <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
        <p className='bottomhead'>Readmore</p>
      </div>
      
    </div>
    <div>
        <div className='follow'>
            <p><img className='sidelogo' src={instagram} alt="" /></p>
            <p><img className='sidelogo' src={tiktok} alt="" /></p>
            <p><img className='sidelogo' src={spotify} alt="" /></p>
            <p><img className='sidelogo' src={youtube} alt="" /></p>
            <p><img className='sidelogo' src={pinterest} alt="" /></p>
            <p><img className='sidelogo' src={facebook} alt="" /></p>
        </div>
    </div>
    <div>
        <div className='bottomend'>
            <p className='bottomendtext'>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
            <p><img className='logo' src={logo} alt="" /></p>
            <p className='basetext'>INDIA | RS</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Bottom
