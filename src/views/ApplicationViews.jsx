import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../Components/dashboard/Dashboard.jsx"
import { AllArticles } from "../Components/articles/AllArticles.jsx"
import { NavBar } from "../Components/Chat/Nav/NavBar.jsx"
import { Chat } from "../Components/Chat/Chat.jsx"
import { editMessage } "../Components/Chat/editMessage.jsx"

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
                <Route index element={<Dashboard />} />
                <Route path="articles" element={<AllArticles />} />
                <Route path="messages" element={<Chat />} /> 
                    <Route path=":edit" element={<editMessage />}>
                    
                </Route>
            </Route>
        </Routes>
    )

}
 