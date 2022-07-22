import React from 'react';
import MediaData from './MediaData'
import MediaItem from './MediaItem'
import './Media.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
import Helmet from 'react-helmet';
const Media = () => MediaData.length > 0 && (
    <>
        <Helmet>
            <title>Chocolate Monkeys | Media</title>
        </Helmet>
        <Header />
        <div className='media'>
            <span className='media-heading'>Media</span>
            <span className='media-exc'>Finding your way through</span>
            <div className="media-container">
                {MediaData.map((mediadata, idx) => (
                    <MediaItem data={mediadata} key={idx} />
                ))}
            </div>
        </div>
        <Footer />
    </>
)

export default Media;