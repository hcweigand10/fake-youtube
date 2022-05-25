import React from "react";

const VideoFeature = (props) => {
  const feature = props.feature;

  if(!props.feature) {
      return <div>Loading...</div>
  }

  const url = `https://www.youtube.com/embed/${feature.id.videoId}`


  return (
      <div className="ui segment">
          <div className="ui embed">
            <iframe src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3>{feature.snippet.title}</h3>
          <h5>{feature.snippet.channelTitle}</h5>
          <p>{feature.snippet.description}</p>
      </div>
  )
};

export default VideoFeature;
