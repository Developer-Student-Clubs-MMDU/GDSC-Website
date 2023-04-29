import React from 'react'
import './Eventpage.sass'
import { GrSearch } from 'react-icons/gr';
import FutureEvents from '../../../Subcomponents/CardGrid/futureEvents';


function UpcomingEventpage() {
  return (
    <>
      <div className="E-container">
        <div className="E-1 green">
          <h1>Upcoming Events</h1>
        </div>
        <div className="E-2">
          <div className="E-2-2">
            <li><input type="text"  name="Search" id="input" placeholder='Search Event' /></li>
            <li> <GrSearch /> </li>
          </div>
        </div>
        <div className="E-3">
          <FutureEvents />
        </div>
      </div>
    </>
  )
}

export default UpcomingEventpage