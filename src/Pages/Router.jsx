import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FutureEvents from '../Subcomponents/CardGrid/futureEvents';
import PastEvents from '../Subcomponents/CardGrid/PastEvents';
import About from './About/About';
import Eventpage from './Events/Eventpage/Eventpage';
import Home from './Home/Home';
import EventDetails from './Events/eventDetails';



function Router() {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='/eventpage/*' element={<Eventpage />} >
                <Route path='future' element={<FutureEvents />} />
                <Route path='past' element={<PastEvents />} />
            </Route>
            <Route path="/eventdetails" element={<EventDetails/>} />
        </Routes>
    )
}

export default Router