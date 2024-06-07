import { useEffect, useState } from "react"
import { getAllArticles } from "../../services/articleServices.jsx"
import { Article } from "./Article.jsx"
import "./Articles.css"
import { useNavigate } from "react-router-dom"

export const AllArticles = () => {
    const [allArticles, setAllArticles] = useState([])
    const [currentUser, setCurrentUser] = useState(0)

    const navigate = useNavigate()

    const getAndSetArticles = () => {
        getAllArticles().then(articlesArray => {
            const reverse = articlesArray.reverse()
            setAllArticles(reverse)
            setCurrentUser(4)
        })
    }

    useEffect(() => {
        getAndSetArticles()
    }, [])


    return (
        <article className="articleContainer">
            <h2>Articles</h2>
            {allArticles.map(article => {
                return <Article article={article} key={article.id} getAndSetArticles={getAndSetArticles} currentUser={currentUser} />
            })}
            <button onClick={() => {navigate("/articles/new")}}>New Article</button>
        </article>
    )
}
