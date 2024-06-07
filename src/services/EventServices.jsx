export const getAllEvents = () => { 
    return fetch ("http://localhost:8088/events?_expand=user8").then((response) => response.json())

    

}

export const CreateNewEvent = (newevent) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newevent),
    })
}