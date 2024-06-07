import { useEffect, useState } from "react"
import { getAllArticles } from "../../Services/articleServices.jsx"
import { Article } from "./Article.jsx"
import "./Articles.css"
import { Link, useNavigate } from "react-router-dom"

export const AllArticles = () => {
    const [allArticles, setAllArticles] = useState([])
    const [currentUser, setCurrentUser] = useState(0)

    const navigate = useNavigate()

    const getAndSetArticles = () => {
        getAllArticles().then(articlesArray => {
            const reverse = articlesArray.reverse()
            setAllArticles(reverse)
            setCurrentUser(1)
        })
    }

    console.log(currentUser)

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
