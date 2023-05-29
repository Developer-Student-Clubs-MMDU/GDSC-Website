import React from 'react'
import './AboutTeam.sass'
import Image from '../../Assets/images/image.jpg'
import Team from '../../Subcomponents/Carousels/MeetTeam/Team'


function AboutTeam() {

    
//      const location = useLocation()

//     location = {
//         pathname:"/about",
//         hash: "#A-4-1"
//     }
   
//     useEffect(()=> {
        
//             let elem = document.getElementById("A-4-1")
//             if (elem) {
//                 elem.scrollIntoView()
            
//             }
// },[])

    return (
        <div className="A-Container">
            <div className="A-1" >

                <h1>Team</h1>
            </div>
            <div className="A-4">
                <div className="A-4-1" id='A-4-1'>
                <h1>Meet The Team</h1>
                </div>
              <Team/>
        </div>
        </div>
    )
}

export default AboutTeam