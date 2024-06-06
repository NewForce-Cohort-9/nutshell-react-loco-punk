import "./Form.css"

export const editMessage = () => {
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