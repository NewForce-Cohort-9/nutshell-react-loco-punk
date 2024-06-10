export const addNewArticle = (article) => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
}

export const getAllArticles = () => {
    return fetch("http://localhost:8088/articles").then(res => res.json())
}

export const deleteArticle = (id) => {
    return fetch(`http://localhost:8088/articles/${id}`, {
        method: "DELETE"
    })
}

export const getArticleById = (id) => {
    return fetch(`http://localhost:8088/articles/${id}`).then(res => res.json())
}

export const updateArticle = (article) => {
    return fetch(`http://localhost:8088/articles/${article.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
}
