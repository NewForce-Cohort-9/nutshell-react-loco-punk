import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"

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
            </Route>
        </Routes>
    )

}