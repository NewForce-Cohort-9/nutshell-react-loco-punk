import { useState } from "react";
import { addNewImage } from "../../Services/imageServices.jsx";

export const NewImage = ({currentUser}) => {
    const [image, setImage] = useState({ url: "", caption: "", userId: currentUser})

    const handleAddImage = (event) => {
        if (!image.url || !image.caption) {
            window.alert("Please add a url and a caption for your image.")
        } else {
            const imageCopy = {...image}

            addNewImage(imageCopy)
        }
    }

    return (

        <>Images</>

    )
}