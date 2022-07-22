import React from 'react'
import './teamfooter.css'
import footericon from '../../assets/icons/footericon.svg'
import discord from '../../assets/icons/discordftr.svg'
import instagram from '../../assets/icons/instagramftr.svg'
import twitter from '../../assets/icons/twitterftr.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import reddit from '../../assets/icons/reddit.svg'
import telegram from '../../assets/icons/telegram.svg'
import medium from '../../assets/icons/medium.svg'
function Footer() {
    return (
        <>
            <div className="footer-team">
                <img className='footer-icon-team' src={footericon} alt="" />
                <div className='footer-social-team'>
                    <a href="https://discord.com/invite/MKYFkDh6yw" target="_blank"><img style={{ height: "2.5rem" }} src={discord} alt="" /></a>
                    <a href="https://twitter.com/ChocoMonkeys" target="_blank" ><img style={{ height: "2.5rem" }} src={twitter} alt="" /></a>
                    <a href="https://www.instagram.com/chocolatemonkeysnft5/" target="_blank"><img style={{ height: "2.5rem" }} src={instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/chocolate-monkeys-nft-a375a3243/" target="_blank"><img style={{ height: "2.5rem" }} src={linkedin} alt="" /></a>
                    <a href="https://www.reddit.com/user/ChocolateMonkeyNFT" target="_blank" ><img style={{ height: "2.5rem" }} src={reddit} alt="" /></a>
                    <a href="https://t.me/chocolatemonkeysnft" target="_blank"><img style={{ height: "2.5rem" }} src={telegram} alt="" /></a>
                    <a href="https://medium.com/@ChocolateMonkeysNFT" target="_blank"><img style={{ height: "2.5rem" }} src={medium} alt="" /></a>
                </div>
                <div className="footer-last-team">
                    <span>Copyright © 2022 </span>
                    <span>Terms and Conditions</span>
                </div>
            </div>
        </>
    )
}

export default Footer