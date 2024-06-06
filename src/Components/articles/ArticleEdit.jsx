import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArticleById, updateArticle } from "../../Services/articleServices.jsx"

export const ArticleEdit = () => {
    const [article, setArticle] = useState({})

    const navigate = useNavigate()

    const {articleId} = useParams()

    useEffect(() => {
        getArticleById(articleId).then(articleObj => {
            setArticle(articleObj)
        })
    }, [])

    const handleArticleEdit = () => {
        if (!article.title || !article.synopsis || !article.url) {
            window.alert("Please enter a title, synopsis, and url for your article")
        } else {
            const time = new Date().toLocaleTimeString()
            const date = new Date().toLocaleDateString()

            const articleCopy = {...article}
            articleCopy.time = time
            articleCopy.date = date

            updateArticle(articleCopy)

            navigate("/articles")
        }
    }
    
    return (
        <form>
            <h2>Edit Article</h2>
            <fieldset>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={article.title}
                        onChange={(event) => {
                            const articleCopy = {...article}
                            articleCopy.title = event.target.value
                            setArticle(articleCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Synopsis:</label>
                    <input 
                        type="text"
                        value={article.synopsis}
                        onChange={(event) => {
                            const articleCopy = {...article}
                            articleCopy.synopsis = event.target.value
                            setArticle(articleCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>URL:</label>
                    <input
                        type="text"
                        value={article.url}
                        onChange={(event) => {
                            const articleCopy = {...article}
                            articleCopy.url = event.target.value
                            setArticle(articleCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <button onClick={handleArticleEdit}>Save</button>
                </div>
            </fieldset>
        </form>
    )
}