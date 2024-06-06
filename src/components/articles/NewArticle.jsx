import { useState } from "react"
import { addNewArticle } from "../Services/articleServices.jsx"

export const NewArticle = ({ currentUser }) => {
    const [article, setArticle] = useState({ title: "", synopsis: "", url: "", userId: currentUser, time: "", date: "" })

    const handleArticleCreation = (event) => {
        if (!article.title || !article.synopsis || !article.url) {
            window.alert("Please enter a title, synopsis, and url for your article")
        } else {
            const time = new Date().toLocaleTimeString()
            const date = new Date().toLocaleDateString()

            const articleCopy = {...article}
            articleCopy.time = time
            articleCopy.date = date

            addNewArticle(articleCopy)
        }
    }

    return (
        <form>
            <h2>Add A New Article</h2>
            <fieldset>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        placeholder="Article Title"
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
                        placeholder="Article Synopsis"
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
                        placeholder="Article URL"
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
                    <button onClick={handleArticleCreation}>Save Article</button>
                </div>
            </fieldset>
        </form>
    )
}