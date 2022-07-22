import React from 'react';
import NewsData from './newsdata'
import NewsItem from './newsitem'
import './news.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
import Helmet from 'react-helmet';
const News = () => NewsData.length > 0 && (
    <>
        <Helmet>
            <title>Chocolate Monkeys | News</title>
        </Helmet>
        <Header />
        <div className='news'>
            <span className='news-heading'>NEWS & ARTICLES</span>
            <div className="news-container">
                {NewsData.map((newsdata, idx) => (
                    <NewsItem data={newsdata} key={idx} />
                ))}
            </div>
        </div>
        <Footer />
    </>
)

export default News;