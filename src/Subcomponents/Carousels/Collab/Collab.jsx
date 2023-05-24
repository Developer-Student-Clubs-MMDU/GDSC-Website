import React from 'react'
import Carousel from './Carousel'
// import './Collab.sass'
import "./Carousel.sass";



function Collab() {
    return (
        // <div className="main_container container-fluid">
        //   <section id="clients" class="s-clients box">
        //     <div className="row section-header" data-aos="fade-up">
        //       <div className="col-full pe-0">
        //         <h3 className="subhead ">Our Clients</h3>
        //         <h1 id="h1">Glint has been honored to
        //           partner up with these clients</h1>
        //       </div>
        //     </div>
        //     <Carousel/>
        //     {/* <hr className='hr-line mx-auto' />
        //     <Carousel_2 /> */}
        //   </section>
        // </div>
        <div className="H-Sc-Container">
          <h1>Our Collaborators</h1>
          <p>GDSC has been honored to partner up with these Organisations</p>
        <Carousel/>
        </div>
      )
}

export default Collab