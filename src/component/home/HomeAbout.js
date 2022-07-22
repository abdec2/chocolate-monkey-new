import React from 'react'
import './Home.css'
import discordwhite from '../../assets/icons/discordwhite.svg'
import instagramwhite from '../../assets/icons/instagramwhite.svg'
import twitterwhite from '../../assets/icons/twitterwhite.svg'
import aboutimg1 from '../../assets/icons/aboutimg1.svg'
export default function HomeAbout() {
    return (

        <div className='home-about'>
            <span className='homeAbout-h1'>ABOUT</span>
            <div className='home-about2'>
                <div className='home-aboutFollow'>
                    <span style={{ fontSize: "16px", marginBottom: "30px" }}>Follow us on:</span>
                    <span><a href="https://twitter.com/ChocoMonkeys" target="_blank" ><span><img src={twitterwhite} alt="" /> TWITTER</span></a></span>
                    <span><a href="https://discord.com/invite/MKYFkDh6yw" target="_blank"><span><img src={discordwhite} alt="" />DISCORD</span></a></span>
                    <span><a href="https://www.instagram.com/chocolatemonkeysnft5/" target="_blank"><span><img src={instagramwhite} alt="" />INSTAGRAM</span></a></span>
                </div>
                <div className='home-aboutImage'>
                    <img src={aboutimg1} alt="" />
                </div>
                <div className='home-aboutExcerpt'>
                    <span>Non-Fungible Tokens or NFTs have become a common name across crypto communities and projects in the first quarter of 2021. Their market cap has been steadily rising and currently stands at $20B. It is slated to grow massively in the coming future as the blockchain are and the game userbase expands. For this reason, NFTs will gain further adoption and usage with time.<br /><br />
                        The arts is home to many NFTs. It is the most interesting and most important use case for non-fungible token mechanics, NFTs have provided a significant opportunity for the Arts thanks to the ownership opportunities they introduce. However, in this paper, we are going to focus on getting the real valuable reward of money from Chocolate Monkey NFTs<br /><br />
                        As stated earlier, Chocolate Monkeys is a collection of 10,000 NFTs—unique digital collectibles tied to the Ethereum blockchain. Here your Chocolate Monkey doubles as your key to the Candy Shop and grants access to owner benefits, surprises, and more incentives. As a bonus, when you purchase a Chocolate Monkey NFT, 15% of your purchase goes to charity.<br /><br /><br />
                        <span style={{ fontWeight: "bold" }}>We are also introducing the new Chocolate Coin (CHOCO) which helps to grow the Chocolate Monkeys ecosystem.</span>    </span>
                </div>
            </div>
        </div>

    )
}
