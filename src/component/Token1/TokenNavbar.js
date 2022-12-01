import React from 'react'
import { Link } from 'react-router-dom'
import cmlogo from "../../../src/assets/icons/cmlogo.svg"
import Hamburger from '../navbar/Hamburger';
import "./TokenNavbar.css"
function Navbar() {
    return (

        <div className="token-header">
            <div className="token-header-left">
                <div>
                    <Link to="/">
                        <img
                            className='token-header-icon'
                            src={cmlogo}
                            alt="example"
                        />
                    </Link>
                </div>
            </div>
            <div className="token-header-right">
                <div className="token-header-left-menu">
                    <Link className="token-navLink" aria-current="page" to="/">Home</Link>
                    <Link className="token-navLink" aria-current="page" to="/team">Team</Link>
                    <Link className="token-navLink" aria-current="page" to="/mint">Mint</Link>
                    <Link className="token-navLink" aria-current="page" to="/token">Token</Link>
                    <Link className="token-navLink" aria-current="page" to="/charity">The Charity</Link>
                    <Link className="token-navLink" aria-current="page" to="/">Whitepaper</Link>
                    <Link className="token-navLink" aria-current="page" to="/contact">Contact</Link>
                    <Link className="token-navLink" aria-current="page" to="/news">News</Link>
                    <Link className="token-navLink" aria-current="page" to="/media">Media</Link>
                    <Link className="token-navLink" aria-current="page" to="/press">Press</Link>
                </div>

            </div>
            <Hamburger />

        </div>

    )
}

export default Navbar