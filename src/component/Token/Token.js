import React from 'react'
import './Token.css'
import Header from './TokenNavbar'
import Footer from '../footer/Footer.js'
import tokenleft from '../../assets/icons/tokenleft.svg'
import tokenbar from '../../assets/icons/tokenbar.svg'
import Helmet from 'react-helmet'
import Countdown from './Countdown.js'
import { Link } from 'react-router-dom'
import pdf from '../../assets/whitepaper/whitepaper.pdf'
import tokenomics from '../../assets/icons/tokenomics.svg'
import tokend from '../../assets/icons/tokend.svg'
import commallo from '../../assets/icons/commallo.svg'
import eth from '../../assets/icons/etlogo.svg'
import cho from '../../assets/icons/chlogo.svg'
import CONFIG from './../../config/config.json'

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
            {/* <div className="token-bottom">
                <img src={tokenbar} alt="" />
            </div> */}
            <div className='token-cdn'>

                <span className='token-h2'>The Choco sale starts in</span>
                <Countdown />
                <div className='cdn-btns'>
                    <button onClick='/mint' className='btn btn-1' >BUY CHOCO COIN</button>
                    <a className="navLink" href={pdf} target="_blank" rel="noreferrer"><button onClick='/whitepaper' className='btn btn-1' >WHITEPAPER</button></a>
                </div>
                <div className='cdn-stg'>
                    <div className='cdn-stgs'>
                        <span className='cdn-name'>STAGE 1</span>
                        <span className='cdn-name1'>PRIVATE SALE</span>
                        <span className='cdn-name2'>10% of your token @ rate of<br />
                            0.0000001666666667</span>
                    </div>
                    <div className='cdn-stgs border-lr'>
                        <span className='cdn-name'>STAGE 2</span>
                        <span className='cdn-name1'>PRE SALE</span>
                        <span className='cdn-name2'>@ rate of <br />
                            0.0000001666666667</span>
                    </div>
                    <div className='cdn-stgs'>
                        <span className='cdn-name'>STAGE 3</span>
                        <span className='cdn-name1'>PUBLIC SALE</span>
                        <span className='cdn-name2'>@ rate of <br />
                            0.000000175000000035</span>
                    </div>
                </div>

            </div>
            <div className='token-cdn2'>
                <img src={tokenomics} alt="" />
                <div className="home-tokenomics">
                    <span className="home-tokenomicsExcerpt" style={{ color: "#F0484B", fontWeight: 'bold' }}>We are also introducing the new Chocolate Coin (CHOCO) which helps to grow the Chocolate Monkeys ecosystem. This will be available both online and offline if we do our jobs well and you embrace our Chocolate Monkeys! Become an owner and help us create something super exciting!</span>
                    <div className='token-ticker'>
                        <div className='ticker-col'>
                            <span className='ticker-1'>Ticker</span>
                            <span className='ticker-2'>CHOCO</span>
                        </div>
                        <div className='ticker-col'>
                            <span className='ticker-1'>Token Name</span>
                            <span className='ticker-2'>ChocoCoin</span>
                        </div>
                        <div className='ticker-col'>
                            <span className='ticker-1'>Total Supply</span>
                            <span className='ticker-2'>3,000,000,000</span>
                        </div>
                        <div className='ticker-col'>
                            <span className='ticker-1'>Price</span>
                            <span className='ticker-2'>$?</span>
                        </div>
                        <div className='btn'><button>BUY CHOCO COIN</button></div>
                    </div>
                    <div className="home-tokenomicsPie">
                        <div className="home-tokenomicsPieLeft">
                            <span>TOKEN DISTRIBUTION</span>
                            <img src={tokend} alt="" />
                        </div>
                        <div className="home-tokenomicsPieCenter"></div>
                        <div className="home-tokenomicsPieRight">
                            <span>COMMUNITY ALLOCATION</span>
                            <img src={commallo} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='token-cdn2 token-pcpt' id="tokenSale">
                <span className='token-pcptxt'>PARTICIPATE IN<br /> THE CHOCO SALE</span>
                <div className='token-box'>
                    <img style={{ height: "40px", marginRight: "auto" }} src={eth} alt="" />
                    <input type="text" className='bg-transparent' style={{ marginRight: "auto", color: "#F0484B", fontSize: "52px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                        <span>~$0</span>
                        <span>Balance:0.00</span>
                    </div>
                </div>
                <div className='token-box'>
                    <img style={{ height: "40px", marginRight: "auto" }} src={cho} alt="" />
                    <input disabled type="text" className='bg-transparent' style={{ marginRight: "auto", color: "#F0484B", fontSize: "52px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                        <span>~$0</span>
                        <span>Balance:0</span>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "30px", color: "white", fontWeight: "700" }}>
                    <span>1 CHOCO = {CONFIG.ICO_RATE} ETH</span>
                    <button style={{ marginLeft: "auto", marginRight: "auto", width: "50%", marginTop: "30px", marginBottom: "30px" }} className='btn btn-tkn'>START CONNECTING NOW</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Token