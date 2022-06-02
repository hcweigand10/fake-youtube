import React from "react"
import "./VideoItem.css"

const VideoItem = (props) => {
    const onSelect = () => {
        props.onSelect(props.index)
    }
    return (
        <div key={props.key} onClick={onSelect} className="ui grid segment">
            <div  className="five wide column">
                <img className="thumbnail" src={props.video.thumbnails.default.url} alt={props.video.title}/>
            </div>
            <div className="eleven wide column">
                <h3 className="title">{props.video.title}</h3>
                <p className="description">{props.video.description}</p>
            </div>
        </div>
    )
}

export default VideoItem