//1. As a user, I should be able to activate my account 
//and chat with other users. All messages are public. 
//Given a user wants to enter in a chat message
//When the user activates their account
//And enters a message into the New message text input
//Then their message should appear in the Chat area,
// prepended with the user's name

//Given a user is viewing, or entering in chat messages
//When a new message is entered by any user, and there are
// more messages than can fit in the default size of the chat history
//Then the most recent message should always be made visible at the 
//bottom of the chat history

//2. As a user, I should be able to modify a message that I previously posted
//Given a user wants to modify a previous message
//When the user is viewing their messages
//Then there should be an affordance that allows the user to modify the message


//Should be on app.jsx
import { useState, useEffect } from "react"
import { getAllMessages } from "../../Services/messageService"
import { useNavigate } from "react-router-dom"
import "./chat.css"
//import css

export const Chat = () => {
    const [allMessages, setAllMessages] = useState([])
    const [makeEdit, setMakeEdit] = useState([])

    const Navigate = useNavigate()

    useEffect(() => {
        getAllMessages().then((messagesArray) => {
            setAllMessages(messagesArray)
        })
    }, [])

    return (
        <div className="ticket-container">
            <h2>Messages</h2>
            <article className="tickets">
                {allMessages.map(message => {
                    return (
                        <section className="tickets">
                            <header className="ticket-info">{message.message}</header>
                            <div>
                                 <button className="edit-btn" onClick={()=>{navigate("/messages/edit")}}>Edit</button>
                            </div>
                        </section>
                    )
                })}
            </article>
        </div>
    )
}