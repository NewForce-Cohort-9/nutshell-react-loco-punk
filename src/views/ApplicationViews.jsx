import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../Components/dashboard/Dashboard.jsx"
import { AllArticles } from "../Components/articles/AllArticles.jsx"
import { NavBar } from "../Components/Chat/Nav/NavBar.jsx"
import { Chat } from "../Components/Chat/Chat.jsx"
import { editMessage } from "../Components/Chat/editMessage.jsx"
import { NewArticle } from "../Components/articles/NewArticle.jsx"


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
                        <NavBar />
                        <Outlet />

                    </>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="articles" >
                    <Route index element={<AllArticles />} />
                    <Route path=":new" element={<NewArticle />} />
                </Route>

                <Route path="articles" element={<AllArticles />} />
                <Route path="messages" element={<Chat />} /> 
                    <Route path=":messageId/edit" element={<editMessage />}>
                    
                </Route>
            </Route>
        </Routes>
    )
}
 
