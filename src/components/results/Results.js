import React, {useState, useEffect} from "react";
import "./Results.css"
import VideoItem from "../videoItem/VideoItem"

const Results = (props) => {
    const temp = props.results
    const raw = props.results.filter((video)=>{
        return temp.indexOf(video) != props.featureIndex
    })
    const videos = raw.map((video)=> {
        return <VideoItem key={video.id.videoId} index={props.results.indexOf(video)} video={video.snippet} onSelect={props.onSelect}/>
    })
    return (
        <div className="results">
            {videos}
        </div>
    )
}

export default Results