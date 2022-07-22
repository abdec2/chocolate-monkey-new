import React from 'react'
import tokenomics from '../../assets/icons/tokenomics.svg'
import tokend from '../../assets/icons/tokend.svg'
import commallo from '../../assets/icons/commallo.svg'

function Tokenomics() {
    return (
        <>
            <img src={tokenomics} alt="" />
            <div className="home-tokenomics">
                <span className="home-tokenomicsExcerpt" style={{ color: "#F0484B", fontWeight: 'bold' }}>We are also introducing the new Chocolate Coin (CHOCO) which helps to grow the Chocolate Monkeys ecosystem. This will be available both online and offline if we do our jobs well and you embrace our Chocolate Monkeys! Become an owner and help us create something super exciting!</span>
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
        </>
    )
}

export default Tokenomics