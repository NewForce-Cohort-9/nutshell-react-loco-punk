import { useEffect, useState } from "react"
import { getAllArticles } from "../../services/articleServices.jsx"

export const Dashboard = () => {
    const [allArticles, setAllArticles] = useState([])

    const getAndSetArticles = () => {
        getAllArticles().then(articlesArray => {
            setAllArticles(articlesArray)
        })
    }

    useEffect(() => {
        getAndSetArticles()
    }, [allArticles])

    return (
        
    )
}