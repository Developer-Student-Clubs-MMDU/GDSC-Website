import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'

// import picture from '../Assets/images/gdsc_logo.png'
import { HashLink } from 'react-router-hash-link';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.sass'
import Logo from '../../Subcomponents/GDSClogo/Logo';
// import Dropdown from '../../Subcomponents/NavDrop/Dropdown';



function Header() {

  function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
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

  // console.log(windowSize)

  // const [check,checked]= useState()
  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 1200, left: 0, behavior: "smooth" })
    }, 80)
  }

  return (
    <div className="G-H">
      <div className="G-H-L">
        <Logo width={windowSize} />
      </div>
      <div className="G-H-N">
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/about' >About</Link> </li>
        <li>
           <Link to='/UpcomingEvents'>Events</Link>
          {/* <ol className="G-H-N-DROP-Container">
            <li><Link to="/UpcomingEvents" >Upcoming</Link></li>
            <li><Link to="/PastEvents"  >Past</Link></li>
          </ol> */}
        </li>
        <li> <Link to={"/about#card"} onClick={scroll} >Team</Link> </li>
        <li> <Link to={"/#H-SC-Body"} onClick={scroll} >Work</Link> </li>
        <li> <HashLink to={"#G-F-3"} >Contact</HashLink> </li>
      </div>
      <div className="G-H-N-R">
        <RxHamburgerMenu />
        <ol className='drop' >
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about' >About</Link> </li>
          <li><Link to="/UpcomingEvents" >Upcoming events</Link></li>
          <li><Link to="/PastEvents"  >Past events</Link></li>
          <li> <HashLink to={"#G-F-3"} >Contact</HashLink> </li>
        </ol>
      </div>
    </div>
  )
}

export default Header