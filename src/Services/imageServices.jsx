export const getImages = () => {
    return fetch("http://localhost:8088/images").then(res => res.json())
}

export const addNewImage = (image) => {
    return fetch("http://localhost:8088/images", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(image)
    })
}

