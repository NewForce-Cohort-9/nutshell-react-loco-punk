import { useEffect, useState } from "react"
import { getAllTasks } from "../../services/TaskServices.jsx"

export const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getAllTasks().then(taskArray => {
            setTasks(taskArray)
        })



    }, [],  )

    return (

        <div className="tasks">
            {tasks.map(taskObj => {
                return <>
                
                <div>
                    <h2>{taskObj.task}</h2>
                </div>
                </>
            })}


        </div>
    )
}