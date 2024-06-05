import { useState, useEffect } from "react";
import { getAllEvents } from "../../services/EventServices.jsx";

export const EventList = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
      getAllEvents().then(eventArray => {
        setEvents(eventArray)
      })

    }, [] )



  return (
    <div className="events">
            {events.map(eventObj => {
              return <>
              <div>
                <h2>{eventObj.event}</h2>
              </div>
              </>
               })}
      
    </div>
    )
}