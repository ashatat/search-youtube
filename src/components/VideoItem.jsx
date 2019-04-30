import React from 'react';
import './VideoItem.css';

const VideoItem = ({
  video,
  onVidSelect,
}) => {
  return(
    <div onClick={() => onVidSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="conte">
        <div className="head">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
