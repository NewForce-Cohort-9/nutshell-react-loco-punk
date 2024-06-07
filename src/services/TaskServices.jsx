export const getAllTasks = (userId) => {
    return fetch(`http://localhost:8088/tasks?_userId=${userId}&_expand=user`)
    .then((res) => res.json())

}

export const CreateNewTask = (newtask) => {
    return fetch(`http://localhost:8088/task`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newtask), 
     } )
    }