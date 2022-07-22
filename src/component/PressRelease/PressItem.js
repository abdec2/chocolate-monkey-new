import React from 'react';
import defaultimg from '../../assets/images/defaultnews.png'
import './Press.css'
const PressItem = ({ data }) => (
    <div className="press-item">
        <div className="press-item-content">
            <img className="press-item-img" src={`${data.image || defaultimg}`}></img>
            <span className='press-item-desc' >{data.desc}</span>
            <span className='press-item-link'><a href={data.link} target="_blank">Read article ></a></span>
        </div>
    </div>
);

export default PressItem;