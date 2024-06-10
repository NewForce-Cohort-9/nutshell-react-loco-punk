import { useState, useEffect } from "react";
import { getAllEvents } from "../../Services/EventServices.jsx";
import { useNavigate } from "react-router-dom";
import "./Events.css"

export const EventList = ({currentUser}) => {
    const [events, setEvents] = useState([])

     useEffect(() => {
      getAllEvents(currentUser.id).then(eventArray => {
       const filterArray = eventArray.filter(event => event.userId === currentUser.id)
        setEvents(filterArray)
      })

    }, [currentUser] )

    const navigate = useNavigate()

  return (

    <div className="events"> <h1>Events </h1>
      {events.map(eventObj => {
        return <>
         <div>
          <h2>{eventObj.event}</h2>
          <button>Edit</button>
         </div>
         </>
         })}

            <button onClick={() => {navigate("/events/create")}}>Create New</button>
    </div>
    )
}