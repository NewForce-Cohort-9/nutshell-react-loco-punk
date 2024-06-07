import { useState } from "react"
import "./CreateEvent.css"
import { CreateNewEvent } from "../../services/EventServices.jsx"


export const CreateEvent = () => {
    const [newEvent, setNewEvent] = useState({})
    
    const handleMake = () => {
        if (newEvent.event && newEvent.date && newEvent.location) {
            const newEventCopy = {...newEvent}
            newEvent.userId=currentUser
            CreateNewEvent(newEventCopy)
    } else {
        window.alert("Please Fill Out the Description")
    }
}
    
    
    
    
    
    return(
        <form>
            <fieldset className="fieldset"><h1>New Event</h1>
            <fieldset className="fieldset">
                <fieldset>
                    <div>
                        <h2>Name</h2>
                      
                        <input
                        placeholder="Brief Description of Event"
                        className="form-control"
                        type ="text"    
                        onChange={(event) => {
                            const newEventCopy = {...newEvent}
                            newEventCopy.name = event.target.value
                            setNewEvent(newEventCopy)
                        }}
                       />
                 
                    </div>
                </fieldset> 
                <fieldset>
                    <div>
                        <label>Date</label>
                        <input 
                        onChange={(event) => {
                            const newEventCopy = {...newEvent}
                            newEventCopy.date = event.target.value
                            setNewEvent(newEventCopy)
                        }}
                        type = "text"
                        />
                    </div>
                  

                </fieldset>
                    <fieldset>
                        <div>
                            <h4>Location</h4>
                            <input 
                            onChange={(event) => {
                                const newEventCopy = {...newEvent}
                                newEventCopy.location = event.target.value
                                setNewEvent(newEventCopy)
                            }}
                            placeholder="Brief Description"
                            className="form-control"
                            type="text"/>
                        </div>
                    </fieldset>
                 </fieldset>
                <fieldset>
                    <div>
                        <button 
                        onClick={handleMake}
                        className=".form-btn:focus">Create</button>
                    </div>
                    
                </fieldset>
           
            </fieldset>
        </form>
    )
}



