import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/Chat/Nav/NavBar.jsx"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AllArticles } from "../components/articles/AllArticles.jsx"
import { TaskList } from "../components/Tasks/Tasks.jsx"
import { EventList} from "../components/Events/Events.jsx"
import { CreateEvent } from "../components/Events/CreateEvent.jsx"
import { CreateTask } from "../components/Tasks/CreateTask.jsx"
import { NewArticle } from "../components/articles/NewArticle.jsx"
import { Login } from "../components/auth/Login.jsx"
import { Register } from "../components/auth/Register.jsx"
import { ArticleEdit } from "../components/articles/ArticleEdit.jsx"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        const localNutshellUser = localStorage.getItem("nutshell_user")
        const currentUser = JSON.parse(localNutshellUser)
        setCurrentUser(currentUser)}, [])
        console.log(currentUser)
        
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                {/* <Route index element={<Dashboard />} /> */}
                <Route index element={<Dashboard />} />
                
                <Route path="login">
                    <Route index element={<Login />} />
                </Route>

                <Route path="register">
                    <Route index element={<Register />} />
                </Route>

                <Route path="articles" >
                    <Route index element={<AllArticles />} />
                    <Route path="new" element={<NewArticle />} />
                    <Route path=":articleId/edit" element={<ArticleEdit />} />
                </Route>
                

            </Route>

            <Route path="events">
                <Route index element ={<EventList currentUser={currentUser}/>}/>  
                <Route path=":create"element={<CreateEvent currentUser={currentUser}/>}/>
            </Route>
            <Route path="tasks">
                <Route index element={<TaskList currentUser={currentUser}/>}/>
                <Route path=":create"element={<CreateTask currentUser={currentUser}/>}/>
            </Route>
     
     

      
          
     

     z</Routes>
    )
}
