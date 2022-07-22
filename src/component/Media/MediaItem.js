import React from 'react';
import mediadefault from '../../assets/images/mediadefault.png'
import './Media.css'
const MediaItem = ({ data }) => (
    <div className="media-item">
        <img className="media-item-img" src={`${data.image || mediadefault}`}></img>
    </div>
);

export default MediaItem