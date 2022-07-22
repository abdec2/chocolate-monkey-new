import React from 'react'
import './Home.css'
import gif3 from '../../assets/gif/gif3.gif'
import monkeystext from '../../assets/icons/monkeystext.svg'
function HomeVision() {
    return (
        <div className="home-vision">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ marginRight: "5%" }} src={monkeystext} alt="" />
                {/* <span style={{ textAlign: "center", fontSize: "18rem", paddingRight: "5%", color: "rgb(255 255 255 / 8%)" }}>MONKEYS</span> */}
                {/*   */}
            </div>
            <div className="home-vision2">
                <div className='home-visionExcerpt'>
                    <span>We are looking to grow the entire Chocolate Monkeys brand. Along with our NFT and token, we are also looking to bridge the digital with the real world by connecting real world candy to the Metaverse. This will allow you to purchase candy in the store and earn CHOCO, special Chocolate Monkeys and access to games and features. We believe that if we can bridge the Metaverse with the real world seamlessly, we can create something amazing. With your help and your purchase of a Chocolate Monkey NFT not only will that help us achieve our vision, but also give a percentage of that purchase to a charity close to our heart.<br /><br />
                        You are very important to making this happen. Without you, we can not achieve our goals so we want you to share with us your ideas and thoughts toward making this happen. We are currently setting up a DAO called The Chocolate Syndicate which you can join and have a say on what we do and the direction we take. We are firm believers in the decentralized economy and want to prove this can work in the real world. Plus, who doesn’t love candy!<br /><br /><br />
                        <span style={{ color: "#FE5659", fontWeight: 'bold' }}>We are focusing on developing a community-driven project and soliciting feedback at every stage of our journey. This allows us to better connect our project with what the community wants.</span>
                    </span>
                </div>
                <div className='home-visionCenter'>
                </div>
                <div className='home-visionImage'>
                    <img src={gif3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeVision