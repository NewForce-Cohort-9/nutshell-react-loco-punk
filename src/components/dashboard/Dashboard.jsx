import { useEffect, useState } from "react"
import { getAllArticles } from "../../Services/articleServices.jsx"

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
        <div>hello</div>
    )
}