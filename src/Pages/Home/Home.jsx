import React from 'react'
import './Home.sass';
import Media from '../../Subcomponents/SocialMedia/mediaContainer/Media';
import Collab from '../../Subcomponents/Carousels/Collab/Collab';
import { Link } from 'react-router-dom'
import Stats from '../../Subcomponents/StatsBar/Stats';
import { HashLink } from 'react-router-hash-link';


export default function Home() {

  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 2250, left: 0, behavior: "smooth" })
    }, 80)
  }

  return (
   <>
      <div className="H-Container"  >
      <li>
        <p>Google Developer Student Clubs,  Maharishi Markandeshwar (Deemed to be University)</p>
      </li>
      <li>
        <p>Empowering Tech Skills, Unleashing Innovation, Learning and Collaboration!</p>
      </li> 
        <li>
          <Link to={"/#H-Sc-C"} onClick={scroll} >
          <button> About Us</button>
          </Link>
        </li>
         {/* <ol>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
         </ol> */}
    </div>
    <Media/>
    <Stats/>
    <Collab/>
   </>
  )
}
