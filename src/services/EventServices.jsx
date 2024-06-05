export const getAllEvents = () => { 
    return fetch ("http://localhost:8088/events?_expand=user8").then((response) => response.json())

    

}