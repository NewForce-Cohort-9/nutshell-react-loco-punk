export const getAllMessages = () => {
    return fetch(`http://localhost:8088/messages`).then((res) => res.json())
}


