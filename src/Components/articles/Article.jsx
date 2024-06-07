import { useNavigate } from "react-router-dom"
import { deleteArticle } from "../../Services/articleServices.jsx"
import { useEffect, useState } from "react"

export const Article = ({ article, getAndSetArticles, currentUser }) => {
    const [tagArray, setTagArray] = useState([])

    const navigate = useNavigate()

    const handleArticleDelete = (articleId) => {
        deleteArticle(articleId).then(() => {
            getAndSetArticles()
        })
    }

    useEffect(() => {
        console.log(article.tags)
        const articleTagArray = article.tags.map()
        setTagArray(articleTagArray)
        console.log(tagArray)
    }, [])

    return (
        <>
            <article className="articleCard">
                <div className="articleCardContent">
                    <section>
                        <header>{article.title}</header>
                        <div>{article.synopsis}</div>
                        <button onClick={() => {window.location.href = `${article.url}`}}>Read More</button>
                    </section>
                    <footer className="articleButtons">
                        {currentUser === article.userId ? <button onClick={() => {navigate(`/articles/${article.id}/edit`)}}>Edit</button> : ""}
                        <button onClick={() => {handleArticleDelete(article.id)}}>Delete</button>
                    </footer>
                </div>
                <div className="articleTagList">
                    <h4>Tags</h4>

                </div>
            </article>
        </>
    )
}
