import React, { useState, useEffect } from 'react';
import './Card.sass';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

function FutureEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsRef = firebase.database().ref('users');
    eventsRef.on('value', (snapshot) => {
      const eventsData = snapshot.val();
      const eventsList = Object.values(eventsData);
      setEvents(eventsList);
    });
  }, []);

  return (
    <div className="E-SC-container">
      {events.map((event) => (
        <div className="E-SC-1" key={event.id}>
          <div className="E-SC-1-1">
            <img src={event.imageUrl} alt="" />
          </div>
          <div className="E-SC-1-2">
            <table>
              <tr>
                <td colSpan="2" id="head">
                  {event.completeTitle}
                </td>
              </tr>
              <tr>
                <td colSpan="2" id="subhead">
                  Details
                </td>
              </tr>
              <tr>
                <td>Date :</td>
                <td>{event.date}</td>
              </tr>
              <tr>
                <td>Time :</td>
                <td>
                  {event.startTime} to {event.finishTime}
                </td>
              </tr>
              <tr>
                <td>Venue :</td>
                <td>{event.venue}</td>
              </tr>
            </table>
            <button>
              <Link to="">Register</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FutureEvents;
