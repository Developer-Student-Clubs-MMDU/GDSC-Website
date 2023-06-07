import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './Header.sass'
import Logo from '../../Subcomponents/GDSClogo/Logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import {RxCross2} from 'react-icons/rx';
import { GrInstagram } from 'react-icons/gr'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandDiscord } from 'react-icons/tb'


function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(windowSize)

  // const [check,checked]= useState()
  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 1200, left: 0, behavior: "smooth" })
    }, 80)
  }
  {
    if (windowSize.innerWidth > 1400) {
      return (
        <div className="G-H">
          <div className="G-H-N">
            <ol>
              <li> <Link to='/'>Home</Link> </li>
              <li> <Link to='/about' >About</Link> </li>
              <li>
                <Link to='/UpcomingEvents'>Events</Link></li>
            </ol>
            <div className="G-H-L">
              <Logo width={windowSize} />
            </div>
            <ol>
            <li> <Link to='/AboutTeam' >Team</Link> </li>
              <li> <Link to={"/#H-SC-Body"} onClick={scroll} >Work</Link> </li>
              <li> <HashLink to={"#G-F-3"} >Contact</HashLink> </li>
            </ol>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="G-H-N-R"> 
          <div className="G-H-L">
              <Logo width={windowSize} />
            </div>
            
      <input
        type="checkbox"
        id="toggle"
        checked={isOpen}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="button-toggle">
        {isOpen? <RxCross2/> :<RxHamburgerMenu />}
      </label>
      <nav className="nav">
      <li> <Link  className='nav-item'  to='/'>Home</Link> </li>
          <li> <Link  className='nav-item'  to='/about' >About</Link> </li>
          <li><Link to='/UpcomingEvents'>Events</Link></li>
          <li><Link to={"/#H-SC-Body"} onClick={scroll} >Work</Link></li>
          <li> <HashLink className='nav-item' to={"#G-F-3"} >Contact</HashLink> </li>
          <li><Link to="/AboutTeam" > Team </Link></li>  
          </nav>
            <style jsx>{`
              .G-H-N-R{
                display:grid;
                grid-template-columns: 3fr 1fr;
                position:fixed;
                width:100vw;
                height: 93px;
                background-color:white;
                align-items: center;
                z-index:100;
                
              }
              .G-H-L{
                margin-right:auto;
                padding:2%;
                grid-column: 1/2;
              }
              .hamhamburger-menu{
                overflow:hidden;
                grid-column: 2/3;
                grid-row: 1/3;
            }
            #toggle , .button-toggle{
                float:left;
                width:100%;
                text-align:center;
            }
            .button-toggle{
                padding:2%;
            }
            #toggle{
                display:inline;
                position:absolute;
                opacity:0;
                width:0.1px;
            }
            svg{
              font-size:2rem;
              float:right;
              padding-right:10%;
            }
            nav{
                display: ${isOpen? 'block' : "none"};
                list-style-type:none;
                text-align:left;
                padding:3%;
                background-color:white;
                grid-column: 1/3;
                width:100%;
                z-index:10;
            }
            li{
              padding:1%;
              font-size:0.6rem;
            }
            a{
              text-decoration:none;
              color:black;
              font-size:1.5rem;
            }
            a:hover{
              color:#3897f0;
            }
            `}</style>
        </div>   
      )
    }
  }
}

export default Header