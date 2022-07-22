import React from 'react'
import './mint.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
import gif1 from '../../assets/gif/gif1.gif'
import MintSlider from './MintSlider'
import BuyMint from './BuyMint'
import { Helmet } from 'react-helmet';
function Mint() {
    return (
        <>
            <Helmet>
                <title>Chocolate Monkeys | Mint</title>
            </Helmet>
            <Header />
            <div className="mint">
                <div className="mint-1">
                    <span className='mint-h1'>Chocolate</span>
                    <span className='mint-h2'>MONKEYS</span>
                    <MintSlider />
                </div>
                <div className="mint-itr">
                    <span style={{ color: "#63342E", fontSize: "40px", lineHeight: "40px", fontWeight: 'bold' }}>MINTING<br /> INSTRUCTIONS</span>
                    <ul className='mint-list' style={{ marginTop: "30px" }}>
                        <li>Connect your Wallet by clicking on the ‘CONNECT WALLET’ button and follow the instructions on MetaMask Note - Make sure your MetaMask Wallet is connected to the Ethereum Mainnet</li>
                        <li>Choose the number of NFTs you want to mint, in the field below</li>
                        <li>Click on the 'Buy Now button and the MetaMask window will pop up </li>
                        <li>Click ‘Accept’ and then ‘Confirm’ on your Metamask wallet - Follow instructions until confirmation is shown</li>
                    </ul>
                </div>
            </div>
            <BuyMint />
            <Footer />
        </>
    )
}

export default Mint