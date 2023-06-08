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
import CountUp from 'react-countup';
// import { db } from '../../Firebase'
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect , useState} from 'react';



export default function Home() {

  // const [dta, setData] = useState(null);
  
  // useEffect(()=>{

  //   const Fetch = async () => {
  //     await getDocs(collection(db, "collabFootfalls"))
  //       .then((querySnapshot) => {
  //         const newData = querySnapshot.docs
  //           .map((doc) => ({ ...doc.data(), id: doc.id }));  
  //           // setData(newData.json()) 
  //       })
  //   }

  //   Fetch()
  //   .then((res)=>{
  //      setData(res)
       
  //     // console.log(dta)
  //   })

  // })


  var a = {
    events: <CountUp end={120} />,
    collab:<CountUp end={34} />,
    footfall:<CountUp end={2300} />,
    prizes: <CountUp end={24} />
}
var b = {
  workshops : "Our interactive workshops equip  university students with practical skills and knowledge in various technical domains, empowering them to thrive in the ever-evolving world of technology.",
  seminars : "Our insightful seminars, organized under Google Developer Student Clubs, invite industry experts to share their expertise, empowering students to stay updated with the latest tech trends and advancements.", 
  Hackathons :"Our exhilarating hackathons provide a platform for university-level students to showcase their skills, collaborate, and build remarkable prototypes within a limited timeframe.",
  open:" We collaborate with developers worldwide, enhancing software and creating innovative solutions for the tech community.",
}

  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 2250, left: 0, behavior: "smooth" })
    }, 80)
  }

  return (
    < div className='main'>
      <div className="H-Container"  >
        <li>
          <p> Google Developer Student Clubs ,  Maharishi Markandeshwar (Deemed to be University)</p>
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
      <Stats data={b} component="intro"/>
      <Stats data={a} component="insight"/>
      <Media />
      <Collab />
    </div>
  )
}
