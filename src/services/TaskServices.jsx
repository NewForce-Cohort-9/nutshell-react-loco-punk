export const getAllTasks = (userId) => {
    return fetch(`http://localhost:8088/tasks?userId=${userId}`)
    .then((res) => res.json())

}

export const CreateNewTask = (newtask) => {
    return fetch(`http://localhost:8088/tasks`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newtask), 
    }).then((res) => res.json())
     } 