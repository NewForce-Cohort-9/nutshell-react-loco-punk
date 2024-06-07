import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AllArticles } from "../components/articles/AllArticles.jsx"
import { TaskList } from "../components/Tasks/Tasks.jsx"
import { EventList} from "../components/Events/Events.jsx"
import { CreateEvent } from "../components/Events/CreateEvent.jsx"
import { CreateTask } from "../components/Tasks/CreateTask.jsx"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        setCurrentUser(4)
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="articles" element={<AllArticles />} />
            </Route>

            <Route path="events">
                <Route index element ={<EventList/>}/>  
                <Route path=":create"element={<CreateEvent/>}/>
            </Route>
            <Route path="tasks">
                <Route index element={<TaskList/>}/>
                <Route path=":create"element={<CreateTask/>}/>
            </Route>
     
     

      
          
     

     z</Routes>
    )

}