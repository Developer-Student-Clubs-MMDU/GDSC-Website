import React from 'react'
import './eventDetails.sass';
import { BsChevronRight } from 'react-icons/bs';
import Moments from '../../Subcomponents/Carousels/eventImg/Moments';
import {db} from '../../Firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';

function EventDetails() {
  const {id} = useParams();

    const [data, setdata] = useState([{}]);
    const Fetch = async()=>{
      await getDocs(collection(db, "users"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setdata(newData);                
          console.log(data);
      })}
  
    const array =  data.filter(obj => obj.id == id); 
    useEffect(()=>{
      Fetch();
      console.log(id)
      console.log(array)
    },[]);



    

  const Speaker ={
    name:'James Olive',
    detail : 'Android developer',
    img :'https://i.pinimg.com/originals/bc/67/74/bc6774134132b43d5ec6ed7bdc748a6c.jpg'
  }


  return (
    <div className='ED-CONTAINER'>
      <div className="ED-1"><h1>Event Details</h1></div>
      <div className="ED-2"><p>Past Events</p> <BsChevronRight /> <p>Compose Camp</p> </div>
      <div className="ED-3">
        <h1>Info Session | Compose Camp</h1>
        <p>Compose Camps are community-organized events focused on how to build Android apps using Jetpack Compose. During these sessions, attendees can get hands-on coding experience on how to develop apps using the latest toolset, Compose, the modern way to develop UI on Android. For those of you who’ve attended Android Study Jams in the past, this is a fun spin on the event series with a focus on Compose!</p>
      </div>
      <h2>Speaker</h2>
      <div className="ED-4">
        <div className="ED-4-1">
          <div className="ED-4-1-1">
            <img src={Speaker.img} alt="" />
            <h3>{Speaker.name}</h3>
            <p>{Speaker.detail}</p>
          </div>
        </div>
      </div>
      <div className="ED-5">
        <h2>Moments</h2>
        <Moments/>
      </div>
    </div>
  )
}

export default EventDetails