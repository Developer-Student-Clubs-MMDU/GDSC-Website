import React from 'react'
import "./Stats.sass";

function Stats({data,component}) {



  {
    if(component == "intro"){
        return (
            <div className=" intro H-Sc-C " id="H-Sc">
                <h3>HELLO THERE </h3>
                <h1>WE ARE GDSC(MMDU)</h1>
                {/* <h1>Community Insights</h1> */}
                <p>We are a community of student developers passionate about technologies. </p>
                <table>
                    <tr>
                        <td>
                            <li>{data.seminars}</li>
                            <li>Seminars</li>
                        </td>
                        <td>
                            <li>{data.Hackathons}</li>
                            <li>Hackathons</li>
                        </td>
                        <td>
                            <li>{data.workshops}</li>
                            <li>Workshops</li>
                        </td>
                        {/* <td>
                            <li>{data.prizes}</li>
                            <li>Prizes Earned</li>
                        </td> */}
                    </tr>
                </table>
                </div>
            )
    }else{
        return (
            <div className="H-Sc-C insight" id="H-Sc-C">
                {/* <h3>HELLO THERE </h3>
                <h1>WE ARE GDSC(MMDU)</h1> */}
                <h1>Community Insights</h1>
                {/* <p>We are a community of student developers passionate about technologies. </p> */}
                <table>
                    <tr>
                        <td>
                            <li>{data.events}</li>
                            <li>Events</li>
                        </td>
                        <td>
                            <li>{data.collab}</li>
                            <li>Collaborations</li>
                        </td>
                        <td>
                            <li>{data.footfall}</li>
                            <li>Footfalls</li>
                        </td>
                        <td>
                            <li>{data.prizes}</li>
                            <li>Prizes Earned</li>
                        </td>
                    </tr>
                </table>
                </div>
          )
    }
  }
}

export default Stats