import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './Home.css'
import gif1 from '../../assets/gif/gif1.gif'
import openseabtn from '../../assets/icons/openseabtn.svg'
import gif2 from '../../assets/gif/gif2.gif'
import HomeAbout from './HomeAbout'
import HomeVision from './HomeVision'
import AboutCollections from './AboutCollections'
import Tokenomics from './Tokenomics'
import Tiimeline from '../Timeline/Timeline'
import { Helmet } from 'react-helmet';
import { Button } from 'antd'
function Home() {
    return (
        <>
            <Helmet>
                <title>Chocolate Monkeys | Home</title>
            </Helmet>
            <Navbar />
            <div className='home'>
                <div className='home-1'>
                    <span className='home-h1'>Chocolate</span>
                    <span className='home-h2'>MONKEYS</span>
                    <img className='home-img1' src={gif1} alt="" />
                </div>
                <span className='home-h3'>Chocolate Monkeys is a collection of<br />
                    10,000 NFTs—unique digital collectibles<br />
                    tied to the Ethereum blockchain.</span>
                <button ><img style={{ width: "220px" }} src={openseabtn} alt="" /></button>
                <img className='home-gif2' src={gif2} alt="" />
                <HomeAbout />
                <HomeVision />
                <AboutCollections />
                <Tokenomics />
                <Tiimeline />
            </div>
            <Footer />
        </>
    )
}

export default Home