import React from 'react'
import './Home.sass';
import Media from '../../Subcomponents/SocialMedia/mediaContainer/Media';



export default function Home() {
  return (
   <>
      <div className="H-Container"  >
      <li>
        <p>Google Developer Student Clubs Maharishi Markandeshwar (Deemed to be University)</p>
      </li>
      <li>
        <p>Empowering Tech Skills, Unleashing Innovation, Learning and Collaboration!</p>
      </li>
    </div>
    <Media/>
   </>
  )
}
