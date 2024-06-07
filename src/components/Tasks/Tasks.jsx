import { useEffect, useState } from "react"
import { getAllTasks } from "../../services/TaskServices.jsx"
import { useNavigate } from "react-router-dom"
import "./Tasks.css"

export const TaskList = ({currentUser}) => {
    const [tasks, setTasks] = useState([])
 
    useEffect(() => {
        getAllTasks(currentUser.id).then(taskArray => {
            const filterArray = taskArray.filter(task => task.userId === currentUser.id)
            setTasks(filterArray)
        })



    }, [currentUser],  )

    const navigate = useNavigate()
    
    return (
         <div className="tasks"> <h1>Tasks</h1>
            {tasks.map(taskObj => {
                return <>
                <div>
                    <h2>{taskObj.task}</h2>
                    <button>Edit
                    </button>
                </div>
                </>
            })}
                 <button 
                 className="section.task"
                onClick={() => {navigate("/tasks/create")}}>
                    Create</button>
             </div>
    )
}