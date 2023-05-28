import React from 'react'
import './Home.sass';
import Media from '../../Subcomponents/SocialMedia/mediaContainer/Media';
import Collab from '../../Subcomponents/Carousels/Collab/Collab';
import { Link } from 'react-router-dom'
import Stats from '../../Subcomponents/StatsBar/Stats';
import { HashLink } from 'react-router-hash-link';
import { GrInstagram } from 'react-icons/gr'
import { FiTwitter } from 'react-icons/fi'
import { RxDiscordLogo} from 'react-icons/rx'
import { RiYoutubeLine} from 'react-icons/ri'
import { SlSocialLinkedin} from 'react-icons/sl'
import { RiGithubLine} from 'react-icons/ri'


export default function Home() {

  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 2250, left: 0, behavior: "smooth" })
    }, 80)
  }

  return (
    < div className='main'>
      <div className="H-Container"  >
        <li>
          <p> <b>Google Developer Student Clubs</b> ,  Maharishi Markandeshwar (Deemed to be University)</p>
        </li>
        <li>
          <p>Empowering Tech Skills, Unleashing Innovation, Learning and Collaboration!</p>
        </li>
        <li>
          <Link to={"/#H-Sc-C"} onClick={scroll} >
            <button>More About Us</button>
          </Link>
        </li>
        <li className='social'>
          <td>
            <Link to="https://www.instagram.com/gdsc_mmdu/" ><GrInstagram/></Link>
          </td>
          <td>
            <Link to="https://twitter.com/gdsc_mmdu" >< FiTwitter/></Link>
          </td>
          <td>
            <Link to="https://discord.com/invite/Gkb4j9rUPD" ><RxDiscordLogo/></Link>
          </td>
          <td>
            <Link to="https://www.youtube.com/channel/UCI-VV1WUuLG-1ptkoqKYf0g" ><RiYoutubeLine/></Link>
          </td>
          <td>
            <Link to="https://www.linkedin.com/company/dscmmdu/" ><SlSocialLinkedin/></Link>
          </td>
          <td>
            <Link to="https://github.com/Developer-Student-Clubs-MMDU" ><RiGithubLine/></Link>
          </td>
        </li>
      </div>
      <Media />
      <Stats />
      <Collab />
    </div>
  )
}
