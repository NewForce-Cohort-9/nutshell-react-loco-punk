export const getAllMessages = () => {
    return fetch(`http://localhost:8088/messages`).then((res) => res.json())
}


export const getMessageById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
    .then((res) => res.json())
}