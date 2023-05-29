import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PastEventpage from './Events/Eventpage/PastEventpage'
import UpcomingEventpage from './Events/Eventpage/UpcomingEventpage'
import About from './About/About';
// import Eventpage from './Events/Eventpage/Eventpage';
import Home from './Home/Home';
import EventDetails from './Events/eventDetails';
import './Router.css'
import AboutTeam from './AboutTeam/AboutTeam';



function Router() {
    return (
        <div className='parent'>
            <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path="/eventdetails/:id" element={<EventDetails/>} />
            <Route path="/PastEvents" element={<PastEventpage/>} />
            <Route path="/UpcomingEvents" element={<UpcomingEventpage/>} />
            <Route path="/AboutTeam" element={<AboutTeam/>} />
        </Routes>
        </div>
    )
}

export default Router