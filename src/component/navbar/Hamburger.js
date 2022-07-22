import React, { useState } from 'react'
import hamburgericon from "../../assets/icons/hamburgericon.svg"
import './Navbar.css'
import { Link } from 'react-router-dom'
import 'antd/lib/drawer/style/index.css';
import discord from '../../assets/icons/discord.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedinr.svg'
import reddit from '../../assets/icons/redditr.svg'
import telegram from '../../assets/icons/telegramr.svg'
import medium from '../../assets/icons/mediumr.svg'
import { Drawer, Button } from 'antd'
function Hamburger() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                onClick={showDrawer}
                className="hamb-menu">
                <img style={{ marginTop: "auto", marginBottom: "auto", height: "20px" }} src={hamburgericon} alt="" />
            </Button>
            <Drawer
                className='drawer-hamburger'
                // title={<img src={bigboxlogo} style={{ height: "30px", marginTop: "10px" }} />}
                placement="right"
                onClose={onClose}
                visible={visible}>
                <div className='hamb-menuli'>
                    <Link className="navLink" aria-current="page" to="/">Home</Link>
                    <Link className="navLink" aria-current="page" to="/team">Team</Link>
                    <Link className="navLink" aria-current="page" to="/mint">Mint</Link>
                    <Link className="navLink" aria-current="page" to="/token">Token</Link>
                    <Link className="navLink" aria-current="page" to="/charity">The Charity</Link>
                    <Link className="navLink" aria-current="page" to="/">Whitepaper</Link>
                    <Link className="navLink" aria-current="page" to="/contact">Contact</Link>
                    <Link className="navLink" aria-current="page" to="/news">News & articles</Link>
                    <Link className="navLink" aria-current="page" to="/media">Media</Link>
                    <Link className="navLink" aria-current="page" to="/press">Press Release</Link>
                    <div className='nav-social'>
                        <a href="https://discord.com/invite/MKYFkDh6yw" target="_blank"><img className='nav-img' src={discord} alt="" /></a>
                        <a href="https://twitter.com/ChocoMonkeys" target="_blank" ><img className='nav-img' src={twitter} alt="" /></a>
                        <a href="https://www.instagram.com/chocolatemonkeysnft5/" target="_blank"><img className='nav-img' src={instagram} alt="" /></a>
                        <a href="https://www.linkedin.com/in/chocolate-monkeys-nft-a375a3243/" target="_blank"><img className='nav-img' src={linkedin} alt="" /></a>
                        <a href="https://www.reddit.com/user/ChocolateMonkeyNFT" target="_blank" ><img className='nav-img' src={reddit} alt="" /></a>
                        <a href="https://t.me/chocolatemonkeysnft" target="_blank"><img className='nav-img' src={telegram} alt="" /></a>
                        <a href="https://medium.com/@ChocolateMonkeysNFT" target="_blank"><img className='nav-img' src={medium} alt="" /></a>
                    </div>
                </div>

            </Drawer>
        </>
    )
}

export default Hamburger