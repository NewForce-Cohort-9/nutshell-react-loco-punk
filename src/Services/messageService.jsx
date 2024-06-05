export const getAllMessages = () => {
    return fetch(`http://localhost:8088/messages`).then((res) => res.json())
}

//Should be on app.jsx
import { useState, useEffect } from "react"
import { getAllChats } from "./services/messageService"
//import css

export const App = () => {
    const [allMessages, setAllMessages] = useState([])
    const [makeEdit, setMakeEdit] = useState([])

    useEffect(() => {
        getAllMessages().then((messagesArray) => {
            console.log("chats")
        })
    }, [])

    return (
        <div className="chat-container">
            <h2>Messages</h2>
            <div>
                <button className="edit-btn">Edit</button>
            </div>
            <article className="chats">
                {allMessages.map(message => {
                    return (
                        <section className="chats">
                            <header className="chat-inside"> #{messages.message}</header>
                        </section>
                    )
                })}
            </article>
        </div>
    )
}