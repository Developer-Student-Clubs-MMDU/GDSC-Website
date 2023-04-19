import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom';

function FutureEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsRef = firebase.database().ref('events');
    eventsRef.on('value', (snapshot) => {
      const eventsData = snapshot.val();
      const eventsArray = [];
      for (let id in eventsData) {
        eventsArray.push({ id, ...eventsData[id] });
      }
      setEvents(eventsArray);
    });
  }, []);

  // Render the events data
  return (
    <div className="E-SC-container">
      {events.map((item) => {
        return (
          <div className="E-SC-1" key={item.id}>
            <div className="E-SC-1-1">
              <img src={item.img} alt="" />
            </div>
            <div className="E-SC-1-2">
              <table>
                <tbody>
                  <tr>
                    <td colSpan="2" id="head">
                      {item.title}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" id="subhead">
                      Details
                    </td>
                  </tr>
                  <tr>
                    <td>Date :</td>
                    <td>{item.details.date}</td>
                  </tr>
                  <tr>
                    <td>Time :</td>
                    <td>
                      {' '}
                      {item.details.time.start} to {item.details.time.finish}{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>Venue : </td>
                    <td>{item.details.venue}</td>
                  </tr>
                </tbody>
              </table>
              <button>
                <Link to=""> Register</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FutureEvents;
