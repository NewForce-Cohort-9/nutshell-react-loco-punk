import { useEffect, useState } from "react"
import { getAllArticles } from "../../Services/articleServices.jsx"
import { AllArticles } from "../articles/AllArticles.jsx"
import "./Dashboard.css"

export const Dashboard = () => {
    return (
        <section className="dashboard">
            <AllArticles />
        </section>
    )
}