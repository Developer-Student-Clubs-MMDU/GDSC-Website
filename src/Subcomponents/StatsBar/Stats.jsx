import React from 'react'
import "./Stats.sass";

function Stats() {

    var data = {
        events: 120,
        collab:34,
        footfall:23,
        prizes: 24
    }

  return (
    <div className="H-Sc-C" id="H-Sc-C">
        {/* <h3>OUR STATS</h3> */}
        {/* <h1>WE ARE GDSC</h1> */}
        <h1>Community Insights</h1>
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

export default Stats