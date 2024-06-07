import { useEffect, useState } from "react"
import { getAllTasks } from "../../services/TaskServices.jsx"
import { useNavigate } from "react-router-dom"
import "./Tasks.css"

export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const currentUser = 3
       
    useEffect(() => {
        getAllTasks().then(taskArray => {
            const filterArray = taskArray.filter(task => task.userId === currentUser)//something muust compare userId with currentUser
            console.log(filterArray)
        })



    }, [],  )

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