
import { useState } from "react"
import "./CreateTask.css"
import { CreateNewTask } from "../../Services/TaskServices.jsx"


export const CreateTask = ({currentUser}) => {
    const [newTask, setNewTask] = useState({})
   

   const handleCreate = () => {
    if (newTask.task && newTask.date) {
        const newTaskCopy = {...newTask}
        newTaskCopy.userId=currentUser.id
         CreateNewTask(newTaskCopy)
    } else {
        window.alert("Please Fill Out the Description!")
    }
   }
    return (
        <form>
            <h1>New Task</h1>
            <div className="form-group">
                <fieldset>
                    <div>
                        <h2>Title</h2>
                      
                        <input
                        placeholder="Brief Description of Task"
                        className="form-control"
                        type ="text"
                        onChange={(event) => {
                            const newTaskCopy = {...newTask}
                            newTaskCopy.task = event.target.value
                            setNewTask(newTaskCopy)
                        }}
                        />
                    </div>
                    </fieldset>
               
                <fieldset>
                    <div>
                        <h4>Date to Be Completed</h4>
                        <input 
                       onChange={(event) => {
                        const newTaskCopy = {...newTask}
                        newTaskCopy.date = event.target.value
                        setNewTask(newTaskCopy)
                       }}
                        type = "text"
                        />
                    </div>

                </fieldset>
                 </div>
                <fieldset className="fieldset">
                    <div className="form-group">
                        <button 
                        onClick={handleCreate}
                        className=".form-btn:focus">Create</button>
                    </div>
                </fieldset>
          
           
        </form>
       
    )
}