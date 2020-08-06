import "./ImageList.css"
import React from "react";
import ImageCard from "./ImageCard"

const ImageList = props => {

    // looping through all the search results and passing through a component using map
    const images = props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image}/>
        )
    })

    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList

