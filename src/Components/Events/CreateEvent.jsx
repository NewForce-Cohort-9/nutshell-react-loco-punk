import { useState } from "react"
import "./CreateEvent.css"
import { CreateNewEvent } from "../../Services/EventServices.jsx"


export const CreateEvent = ({currentUser}) => {
    const [newEvent, setNewEvent] = useState({})
    
    const handleMake = () => {
            const newEventCopy = {...newEvent}
            newEvent.userId=currentUser.id
            CreateNewEvent(newEventCopy)
}
     return(
        <form>
            <fieldset className="fieldset"><h1>New Event</h1>
            <fieldset className="fieldset">
                <fieldset>
                    <div>
                        <h2>Name</h2>
                      
                        <input
                        placeholder="Name of Eventt"
                        className="form-control"
                        type ="text"    
                        onChange={(event) => {
                            const newEventCopy = {...newEvent}
                            newEventCopy.name = event.target.value
                            setNewEvent(newEventCopy)
                        console.log(newEvent)
                        
                        
                        }}
                       />
                 
                    </div>
                </fieldset> 
                <fieldset>
                    <div>
                        <label>Date</label>
                        <input 
                         type = "text"
                        onChange={(event) => {
                            const newEventCopy = {...newEvent}
                            newEventCopy.date = event.target.value
                            setNewEvent(newEventCopy)
                            console.log(newEvent)
                        }}
                       
                        />
                    </div>
                  </fieldset>

                
                    <fieldset>
                        <div>
                            <h4>Location</h4>
                            <input 
                             placeholder="Brief Description"
                             className="form-control"
                            type="text"
                            onChange={(event) => {
                                const newEventCopy = {...newEvent}
                                newEventCopy.location = event.target.value
                                setNewEvent(newEventCopy)
                                console.log(newEvent)
                            }}
                           
                           /> 
                        </div>
                    </fieldset>
                
                <fieldset>
                    <div>
                        <button 
                        onClick={handleMake}
                        className=".form-btn:focus">Create</button>
                    </div>
                    
                </fieldset>
           </fieldset>
            </fieldset>
        </form>
    )
}



