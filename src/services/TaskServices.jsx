export const getAllTasks = () => {
    return fetch(`http://localhost:8088/tasks?_userId=${userId}&_expand=user`)
    .then((res) => res.json())

}