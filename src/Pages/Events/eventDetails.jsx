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
  let arr;

    const [data, setdata] = useState([{}]);
    const Fetch = async()=>{
      await getDocs(collection(db, "users"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setdata(newData);                
          console.log(data);
      })}
  
    // const array =  data.filter(obj => obj.id == id); 
    // const item = array[0];
    useEffect(()=>{
      Fetch();
    },[]);

  // const Speaker ={
  //   name:'James Olive',
  //   detail : 'Android developer',
  //   img :'https://i.pinimg.com/originals/bc/67/74/bc6774134132b43d5ec6ed7bdc748a6c.jpg'
  // }
  return (
    <div className='ED-CONTAINER'>
      {/* <div className="ED-1"><h1>Event Details</h1></div>
      <div className="ED-2"><p>Past Events</p> <BsChevronRight /> <p>{item.title?item.title:""}</p> </div>
      <div className="ED-3">
        <h1>{item.type?item.type:''} | {item.completeTitle ? item.completeTitle:''}</h1>
        <p>{item.description ?item.description:''}</p>
      </div>
      <h2>Speaker</h2>
      <div className="ED-4">
        <div className="ED-4-1">
          <div className="ED-4-1-1">
            <img src={item.speakerImg ?item.speakerImg:''} alt="" />
            <h3>{item.speakerName?item.speakerName:''}</h3>
            <p>{item.speakerType?item.speakerType:''}</p>
          </div>
        </div>
      </div>
      <div className="ED-5">
        <h2>Moments</h2>
        <Moments image={item.EventImages?item.EventImages:''}/>
      </div> */}
    </div>
  )
}

export default EventDetails