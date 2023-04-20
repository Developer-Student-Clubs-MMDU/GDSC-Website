import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../Assets/images/header_logo.png'
import { HashLink } from 'react-router-hash-link';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.sass'



function Header() {

 const scroll = ()=>{
     setTimeout(()=>{
      window.scrollTo({top:1200,left:0, behavior: "smooth"})
     },80)
 }

  return (
    <div className="G-H">
      <div className="G-H-L">
        <img src={Image} alt="gdsc logo" />
      </div>
      <div className="G-H-N">
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about' >About</Link> </li>
          <li> <Link to='/eventpage'>Events</Link> </li>
          <li> <Link to={"/about#card"} onClick={scroll} >Team</Link> </li>
          <li> <Link to={"/#H-SC-Body"} onClick={scroll} >Work</Link> </li>
          <li> <HashLink to={"#G-F-3"} >Contact</HashLink> </li>
      </div>
      <div className="G-H-N-R">
      <RxHamburgerMenu/>
        <ol className='drop' >
        <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about' >About</Link> </li>
          <li> <Link to='/eventpage'>Events</Link> </li>
          {/* <li> <HashLink to={"#A-4-1"} >Team</HashLink> </li> */}
          <li> <HashLink to={"#G-F-3"} >Contact</HashLink> </li>
        </ol>
      </div>
    </div>
  )
}

export default Header