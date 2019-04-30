import React from 'react';

const VidDetail = ({video}) => {
  if (!video) return <div></div>
  return(
    <div>
      <div className="ui embed">
        <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VidDetail;
