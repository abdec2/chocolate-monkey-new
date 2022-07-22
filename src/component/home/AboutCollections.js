import React from 'react'
import cobrbtn from '../../assets/icons/cobrbtn.svg'
import collectionimg1 from '../../assets/icons/collectionimg1.svg'

function AboutCollections() {
    return (
        <div className='home-collections'>
            <div className='home-collections-left'>
                <span className='homeCollections-h1'>ABOUT<br />COLLECTIONS</span>
                <span className='homeCollectionsExcerpt' style={{ marginTop: "30px" }}><span style={{ color: "#F0484B", fontWeight: 'bold' }}>The Chocolate Monkeys are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.) To access owners only areas such as The Candy Shop, our owners will need to be signed into their Crypto Wallet such as Metamask or TrustWallet.</span><br /><br />
                    Every Chocolate Monkey is unique and specially generated from over 80 possible traits, including expressions, clothing, and more. All our Chocolate Monkeys come in 6 unique flavors: Dark Chocolate, Milk Chocolate, White Chocolate, Ruby Chocolate, Carmel and Cookies and Cream. Chocolate Monkeys are super unique and special in their own way, but some are special and super rare. We have also kept hold of 20 very special Chocolate Monkeys that we plan to use in very special ways for those of you that purchase one of these tasty Monkeys.</span>
                <button style={{ marginTop: "30px", fontWeight: 'bold' }} className='btn btn1'>CHECK "OWNER BENEFITS AND RIGHTS"</button>
            </div>
            <div className='home-collections-center'></div>
            <div className='home-collections-right'>
                <span>Price:</span>
                <span style={{ fontSize: "30px", fontWeight: 'bold' }}>0.07 ETHER</span>
                <span>Blockchain:</span>
                <span style={{ fontSize: "30px", fontWeight: 'bold' }}>ETHEREUM MAINNET</span>
                <button style={{ marginTop: "20px", marginBottom: "20px", fontWeight: 'bold' }} className='btn btn2'>BUY NOW</button>
                <img style={{ height: "310px", marginRight: "auto" }} src={collectionimg1} alt="" />
            </div>
        </div >
    )
}

export default AboutCollections