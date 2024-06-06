import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../Components/Chat/Nav/NavBar.jsx"
import { Dashboard } from "../Components/dashboard/Dashboard.jsx"
import { AllArticles } from "../Components/articles/AllArticles.jsx"
import { NewArticle } from "../Components/articles/NewArticle.jsx"
import { Login } from "../Components/auth/Login.jsx"


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


                <Route path="articles" >
                    <Route index element={<AllArticles />} />
                    <Route path=":new" element={<NewArticle />} />
                </Route>
                

            </Route>
        </Routes>
    )
}
