import React from 'react';
import defaultimg from '../../assets/images/defaultnews.png'
import './news.css'
const NewsItem = ({ data }) => (
    <div className="news-item">
        <img className="news-item-img" src={`${data.image || defaultimg}`}></img>
        <span className='news-date'>{data.date}</span>
        <div className="news-item-content">
            <span className='news-item-heading' >{data.heading}</span>
            <span className='news-item-desc' >{data.desc}</span>
            <span className='news-item-link'><a href={data.link} target="_blank">Read article ></a></span>
        </div>
    </div>
);

export default NewsItem;