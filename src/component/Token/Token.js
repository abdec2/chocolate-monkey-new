import React from 'react'
import './Token.css'
import Header from './TokenNavbar'
import Footer from '../Contact/FooterContact'
import tokenleft from '../../assets/icons/tokenleft.svg'
import tokenbar from '../../assets/icons/tokenbar.svg'
import Helmet from 'react-helmet'
import BuyToken from './BuyToken'
function Token() {
    return (
        <>
            <Helmet>
                <title>Chocolate Monkeys | Token</title>
            </Helmet>
            <Header />
            <div className='token'>
                <div className="token-left">
                    <span className='token-leftHeader'>CHOCO COIN</span>
                    <span className='token-leftExcerpt'>We are also introducing the new Chocolate Coin (CHOCO) which helps to grow the Chocolate Monkeys ecosystem. This will be available both online and offline if we do our jobs well and you embrace our Chocolate Monkeys! Become an owner and help us create something super exciting!</span>
                    <button style={{ marginTop: "30px", fontWeight: 'bold' }} className='btnTkn btn1Tkn'>BUY CHOCO COIN</button>
                </div>
                <div className="token-right">
                    <img src={tokenleft} alt="" />
                </div>
            </div>
            <div className="token-bottom">
                <img src={tokenbar} alt="" />
            </div>
            <BuyToken/>
            <Footer />
        </>
    )
}

export default Token