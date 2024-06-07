import { useParams } from "react-router-dom"
import "./Form.css"
import { useEffect, useState } from "react"
import { getMessageById } from "../../Services/messageService"
import { updateMessage } from "../../Services/messageService"

export const EditMessage = () => {
    const [message, setMessage] = useState({})

    const {messageId} = useParams()
    console.log(messageId)


    //pass message id into function
    useEffect (() => {
        getMessageById(messageId).then(messageObj => {
            setMessage(messageObj)
        })
    }, [])

    const handleMessageEdit = () => {
        if (!message.message) {
            window.alert("Please edit message")
        } else {
        
            updateMessage(message)

            navigate("/messages")
        }}

    return (
        <form>
            <h2>Edit Message</h2>
            <fieldset>
                <div className="form-group">
                    <label>Edit</label>
                    <input
                    type="text"
                    className="form-control"
                    value={message.message}
                    onChange={(event) => {
                        const messageCopy = {...message}
                        messageCopy.message = event.target.value
                        setMessage(messageCopy)}}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button onClick={handleMessageEdit} className="form-btn btn-info">Submit Edit</button>
                </div>
            </fieldset>
        </form>
    )
}