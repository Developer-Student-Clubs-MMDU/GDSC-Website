import React from 'react'
import './Eventpage.sass'
import FutureEvents from '../../../Subcomponents/CardGrid/futureEvents';
import Searchbar from '../../../Subcomponents/SearchBar/Searchbar';


function Eventpage() {
  return (
    <>
      <div className="E-container">
        <div className="E-1 green">
          <h1>Events</h1>
        </div>
        <div className="E-2">
          {/* <Searchbar  /> */}
        </div>
        <div className="E-3">
          <FutureEvents />
        </div>
      </div>
    </>
  )
}

export default Eventpage