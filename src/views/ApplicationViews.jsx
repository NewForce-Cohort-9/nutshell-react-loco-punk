import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../Components/Chat/Nav/NavBar.jsx"
import { Dashboard } from "../Components/dashboard/Dashboard.jsx"
import { AllArticles } from "../Components/articles/AllArticles.jsx"
import { NavBar } from "../Components/Chat/Nav/NavBar.jsx"
import { Chat } from "../Components/Chat/Chat.jsx"
import { editMessage } from "../Components/Chat/editMessage.jsx"
import { NewArticle } from "../Components/articles/NewArticle.jsx"
import { Login } from "../Components/auth/Login.jsx"
import { Register } from "../Components/auth/Register.jsx"
import { ArticleEdit } from "../Components/articles/ArticleEdit.jsx"
export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState(0)

    useEffect(() => {
        setCurrentUser(4)
        console.log(currentUser)
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
                

                <Route path="articles" element={<AllArticles />} />
                <Route path="messages" element={<Chat />} /> 
                    <Route path=":messageId/edit" element={<editMessage />}>
                    
                </Route>
            </Route>
        </Routes>
    )
}
 
