import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.sass';
import Logo from '../../Subcomponents/GDSClogo/Logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import { GrInstagram } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';

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

  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 1200, left: 0, behavior: 'smooth' });
    }, 80);
  };

  return (
    <div className={`G-H ${windowSize.innerWidth > 1400 ? 'desktop' : 'mobile'}`}>
      {windowSize.innerWidth > 1400 && (
        <div className="G-H-N">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Events">Events</Link>
            </li>
          </ol>

          <div className="G-H-L">
            <Logo width={windowSize} />
          </div>

          <ol>
            <li>
              <Link to="/AboutTeam">Team</Link>
            </li>
            <li>
              <Link to="/#H-SC-Body" onClick={scroll}>
                Work
              </Link>
            </li>
            <li>
              <HashLink to="#G-F-3">Contact</HashLink>
            </li>
          </ol>
        </div>
      )}

      {windowSize.innerWidth <= 1400 && (
        <div className="mobile-nav">
          <div className="G-H-L">
            <Logo width={windowSize} />
          </div>

          <div className="toggle-container">
            <label htmlFor="toggle" className="button-toggle">
              <span className="toggle-label">
                {isOpen ? <span className="close-icon">X</span> : <span className="menu-icon">&#9776;</span>}
              </span>
            </label>
            <input type="checkbox" id="toggle" checked={isOpen} onChange={handleToggle} />
          </div>

          <nav className={`nav ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link className="nav-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/Events">
                  Events
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/#H-SC-Body" onClick={scroll}>
                  Work
                </Link>
              </li>
              <li>
                <HashLink className="nav-item" to="#G-F-3">
                  Contact
                </HashLink>
              </li>
              <li>
                <Link className="nav-item" to="/AboutTeam">
                  Team
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <style jsx>{`
        .G-H {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: white;
          z-index: 100;
        }

        .G-H-N {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 1rem;
        }
        
        .G-H-L {
          margin-right: auto;
        }

        .toggle-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .button-toggle {
          display: inline-block;
          position: relative;
          cursor: pointer;
          font-size : 2em;
        }
        
        .toggle-label {
          display: inline-block;
          padding: 6px 10px;
          // background-color: #ccc;
          color: #000;
          border-radius: 3px;
        }
        
        .toggle-label .menu-icon {
          display: inline-block;
          margin-right: 5px;
        }
        
        .close-icon {
          display: inline-block;
          font-weight: bold;
        }
        
        #toggle {
          display: none;
        }
        
        #toggle:checked + .button-toggle .toggle-label {
          background-color: #000;
        }

        .G-H-N ol,
        .G-H-N ul {
          list-style-type: none;
          display: flex;
          margin: 0;
          padding: 0;
        }

        .G-H-N li {
          margin-right: 1rem;
        }

        .mobile-nav {
          display: flex;
          align-items: center;
          padding: 1rem;
        }

        .nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: white;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .nav.open {
          display: block;
          opacity: 1;
        }

        .nav ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .nav li {
          padding: 0.5rem 1rem;
          font-size: 1.5rem;
        }

        .nav a {
          text-decoration: none;
          color: black;
        }

        .nav a:hover {
          color: #3897f0;
        }

        @media (min-width: 1401px) {
          .desktop .G-H-N {
            height: 93px;
          }

          .desktop .G-H-L {
            padding: 2%;
          }

          .desktop .G-H-N ol:nth-child(2) {
            margin-right: auto;
          }
          
        }
      `}</style>
    </div>
  );
}

export default Header;
