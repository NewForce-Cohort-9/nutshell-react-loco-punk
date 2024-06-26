import { useEffect, useState } from "react"
import { getAllArticles } from "../../Services/articleServices.jsx"
import { Article } from "./Article.jsx"
import "./Articles.css"
import { useNavigate } from "react-router-dom"

export const AllArticles = ({ currentUser }) => {
    const [allArticles, setAllArticles] = useState([])

    const navigate = useNavigate()

    const getAndSetArticles = () => {
        getAllArticles().then(articlesArray => {
            const reverse = articlesArray.reverse()
            setAllArticles(reverse)
        })
    }

    useEffect(() => {
        getAndSetArticles()
    }, [currentUser])


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
