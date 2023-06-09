import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PastEventpage from './Events/Eventpage/PastEventpage'
import Eventpage from './Events/Eventpage/UpcomingEventpage'
import About from './About/About';
// import Eventpage from './Events/Eventpage/Eventpage';
import Home from './Home/Home';
import EventDetails from './Events/eventDetails';
import './Router.css'
import AboutTeam from './AboutTeam/AboutTeam';
import Magazine from './Magazine/Magazine';



function Router() {
    return (
        <div className='parent'>
            <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path="/eventdetails/:id" element={<EventDetails/>} />
            <Route path="/PastEvents" element={<PastEventpage/>} />
            <Route path="/Events" element={<Eventpage/>} />
            <Route path="/AboutTeam" element={<AboutTeam/>} />
            <Route path="/magazine" element={<Magazine/>} />
        </Routes>
        </div>
    )
}

export default Router