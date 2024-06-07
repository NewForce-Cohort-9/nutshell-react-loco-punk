export const getAllMessages = () => {
    return fetch(`http://localhost:8088/messages`).then((res) => res.json())
}


export const getMessageById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
    .then((res) => res.json())
}

export const updateMessage = (message) => {
    return fetch(`http://localhost:8088/messages/${message.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })}