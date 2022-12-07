import React, { useState, useRef, useEffect, useContext } from 'react'
import './Token.css'
import Header from './TokenNavbar'
import Footer from '../footer/Footer.js'
import tokenleft from '../../assets/icons/tokenleft.svg'
import tokenbar from '../../assets/icons/tokenbar.svg'
import Helmet from 'react-helmet'
import Countdown from './Countdown.js'
import { Link, useNavigate } from 'react-router-dom'
import pdf from '../../assets/whitepaper/whitepaper.pdf'
import tokenomics from '../../assets/icons/tokenomics.svg'
import tokend from '../../assets/icons/tokend.svg'
import commallo from '../../assets/icons/commallo.svg'
import eth from '../../assets/icons/etlogo.svg'
import cho from '../../assets/icons/chlogo.svg'
import CONFIG from './../../config/config.json'
import { ethers } from 'ethers'
import { GlobalContext } from '../../context/GlobalContext'
import TokenAbi from './../../config/tokenAbi.json'
import ABI from './../../config/abi.json'
import IcoAbi from './../../config/ico.json'
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: process.env.REACT_APP_INFURA_PROJECT_ID // required
        }
    }

};

function Token() {
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [mintCount, setMintCount] = useState('')
    const [nftCost, setNftCost] = useState(0.00)
    const [loading, setLoading] = useState(false)

    const [chocoAmount, setChocoAmount] = useState(0)
    const [tokenBalance, setTokenBalance] = useState(0)
    const [ethBalance, setEthBalance] = useState(0)
    const ethInputAmount = useRef()
    const navigate = useNavigate()

    const navigateTo = (link) => {
        navigate(link)
    }

    const {
        account,
        blockchainData,
        network,
        web3,
        delAccount,
        addAccount,
        addNetwork,
        addBlockchain,
        addWeb3 } = useContext(GlobalContext);

        
    const handleOnChange = () => {
        const regExp = /^\d*\.?\d*$/;
        if(ethInputAmount.current.value !== '') {
            if (!regExp.test(ethInputAmount.current.value)) {
                ethInputAmount.current.value = ''
                setChocoAmount(0)
                return
            }
    
            const ethAmountinWei = ethers.utils.parseEther(ethInputAmount.current.value)
            setChocoAmount(ethers.utils.formatEther(ethAmountinWei.mul(CONFIG.RATE)))
        } else {
            setChocoAmount(0)
        }
    }

    const loadBlockChain = async () => {
        if (web3 && account) {
            try {
                const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, ABI, web3);
                const icoContract = new ethers.Contract(CONFIG.ICO_CONTRACT_ADDRESS, IcoAbi, web3);
                const cost = await contract.getNFTPrice();
                setNftCost(ethers.utils.formatEther(cost.toString()))
                addBlockchain({
                    'ico': icoContract,
                    'contract': contract,
                    'nftPrice': cost
                })
                console.log('contract', cost.toString())
            } catch (e) {
                setError(true)
                setErrorMsg('Contract not deployed to current network, please change network to Ethereum Mainnet')
            }
        }
    }

    const connectWallet = async () => {
        const web3modal = new Web3Modal({
            providerOptions
        });
        const instance = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        addAccount({ id: address });
        const networkId = await provider.getNetwork();
        console.log(networkId)
        addNetwork(networkId)
        addWeb3(provider)
        if (networkId.chainId == CONFIG.CHAIN_ID) {
            setError(false)
            setErrorMsg('')
        } else {
            setError(true)
            setErrorMsg('Contract not deployed to current network, please change network to Ethereum Mainnet')
        }

    }

    const buyToken = async () => {
        const regExp = /^\d*\.?\d*$/;
        if(ethInputAmount.current.value !== '') {
            if (!regExp.test(ethInputAmount.current.value)) {
                ethInputAmount.current.value = ''
                return
            }    
        }
        const ethPrice = ethers.utils.parseEther(ethInputAmount.current.value)
        try {
            setLoading(true)
            console.log(ethPrice.toString())

            const signer = web3.getSigner()

            const contractWithSigner = blockchainData.ico.connect(signer)
            const estimate = await contractWithSigner.estimateGas.buyTokens(account, {value: ethPrice.toString()})
            console.log(estimate.toString())
            const tx = await contractWithSigner.buyTokens(account, {value: ethPrice.toString(), gasLimit: estimate.toString() })
            const receipt = await tx.wait()
            console.log(receipt)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }

    useEffect(()=>{
        loadBlockChain();
        if(account && web3) {
            window.ethereum.on('accountsChanged', accounts => {
                addAccount({ id: accounts[0] })
            })
            window.ethereum.on('chainChanged', chainId => {
                window.location.reload();
            })

            web3.getBalance(account).then(balance => {
                console.log(balance.toString())
                setEthBalance(parseFloat(ethers.utils.formatEther(balance)))
            })
            const signer = web3.getSigner()
            const tokenContract = new ethers.Contract(CONFIG.TOKEN_ADDRESS, TokenAbi, signer)
            tokenContract.balanceOf(account).then(balance => {
                console.log(balance.toString())
                setTokenBalance(parseFloat(ethers.utils.formatEther(balance)))
            })
        } 
    }, [account, web3])

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
                    <button onClick={() => navigateTo('/mint')} className='btn btn-1' >BUY CHOCO COIN</button>
                    <a className="navLink" href={pdf} target="_blank" rel="noreferrer"><button className='btn btn-1' >WHITEPAPER</button></a>
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
                    <input type="text" className='bg-transparent' style={{ marginRight: "auto", color: "#F0484B", fontSize: "52px" }} ref={ethInputAmount} onChange={handleOnChange} />
                    <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                        <span></span>
                        <span>Balance: {ethBalance.toFixed(5)}</span>
                    </div>
                </div>
                <div className='token-box'>
                    <img style={{ height: "40px", marginRight: "auto" }} src={cho} alt="" />
                    <input disabled type="text" className='bg-transparent' style={{ marginRight: "auto", color: "#F0484B", fontSize: "52px" }} value={chocoAmount} />
                    <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                        <span></span>
                        <span>Balance: {tokenBalance}</span>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "30px", color: "white", fontWeight: "700" }}>
                    <span>1 CHOCO = {CONFIG.ICO_RATE} ETH</span>
                    {
                        !account && (
                            <button style={{ marginLeft: "auto", marginRight: "auto", width: "50%", marginTop: "30px", marginBottom: "30px" }} className='btn btn-tkn' onClick={connectWallet}>START CONNECTING NOW</button>
                        )
                    }
                    {
                        account && (
                            <>
                                <button disabled={loading} style={{ marginLeft: "auto", marginRight: "auto", width: "50%", marginTop: "30px", marginBottom: "30px" }} className='btn btn-tkn' onClick={buyToken}>{loading ? 'Loading...' : 'Buy Tokens'}</button>
                            </>
                        )
                    }
                </div>
            </div>
            <Footer />
            {error && (<div id="snackbar" className='show'>{errorMsg}</div>)}
        </>
    )
}

export default Token