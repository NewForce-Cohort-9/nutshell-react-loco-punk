import { useNavigate } from "react-router-dom"
import { deleteArticle } from "../../services/articleServices.jsx"

export const Article = ({ article, getAndSetArticles, currentUser }) => {
    const navigate = useNavigate()

    const handleArticleDelete = (articleId) => {
        deleteArticle(articleId).then(() => {
            getAndSetArticles()
        })
    }

    return (
        <>
            <article className="articleCard">
                <section>
                    <header>{article.title}</header>
                    <div>{article.synopsis}</div>
                    <button onClick={() => {window.location.href = `${article.url}`}}>Read More</button>
                </section>
                <footer className="articleButtons">
                    {currentUser === article.userId ? <button onClick={() => {navigate(`/articles/${article.id}/edit`)}}>Edit</button> : ""}
                    <button onClick={() => {handleArticleDelete(article.id)}}>Delete</button>
                </footer>
            </article>
        </>
    )
}
