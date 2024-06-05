import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AllArticles } from "../components/articles/AllArticles.jsx"
import { NavBar } from "../components/Chat/Nav/NavBar.jsx"

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
            </Route>
        </Routes>
    )
}