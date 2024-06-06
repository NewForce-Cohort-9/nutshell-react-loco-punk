import { useParams } from "react-router-dom"
import "./Form.css"
import { useEffect, useState } from "react"

export const editMessage = () => {
    const [message, setMessage] = useState({})

    const {messageId} = useParams()
    console.log(messageId)


    //pass message id into function
    useEffect (() => {
        getMessageById(messageId).then(messageObj => {
            setMessage(messageObj)
        })
    }, [])

    return (
        <form>
            <h2>Edit Message</h2>
            <fieldset>
                <div className="form-group">
                    <label>Edit</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Edit here"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info">Submit Edit</button>
                </div>
            </fieldset>
        </form>
    )
}