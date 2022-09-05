import React from 'react'

import { useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { GlobalContext } from "./../../context/GlobalContext";
import Web3Modal from 'web3modal';
import CONFIG from './../../config/config.json'
import ABI from './../../config/abi.json';
import IcoAbi from './../../config/ico.json'
import WalletConnectProvider from "@walletconnect/web3-provider";

import './../Mint/buymint.css'
import { useRef } from 'react';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: process.env.REACT_APP_INFURA_PROJECT_ID // required
        }
    }

};

const contractAddress = CONFIG.CONTRACT_ADDRESS;

function BuyMint() {
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

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [mintCount, setMintCount] = useState('')
    const [nftCost, setNftCost] = useState(0.00)
    const [loading, setLoading] = useState(false)
    const ethAmount = useRef()

    const loadBlockChain = async () => {
        if (web3 && account) {
            try {
                const contract = new ethers.Contract(contractAddress, ABI, web3);
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
        const ethPrice = ethers.utils.parseEther(mintCount)
        console.log(ethPrice)
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

    const mintCountOnChange = (e) => {
        if(parseFloat(e.target.value) > 0) {
            setMintCount(e.target.value)
        } else {
            setMintCount(0.00)
        }
        
    }


    useEffect(() => {
        loadBlockChain();
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', accounts => {
                addAccount({ id: accounts[0] })
            })
            window.ethereum.on('chainChanged', chainId => {
                window.location.reload();
            })
        }
        console.log(error)
        console.log(web3)
        console.log(blockchainData)
    }, [account, web3]);


    return (
        <>
            <div className="buy-mint buy-token">
                {account ? (
                    <>
                        <input className="mint-input" type="number" placeholder="Amount" value={mintCount} onChange={mintCountOnChange} />
                        <div className="input-group-presuffix">
                            <span className="input-group-addon prefix">Rate:{" "}</span>
                            <input disabled style={{width: '35%'}} className="mint-input" type="text" name="" id="" value={CONFIG.ICO_RATE} onChange={e=>console.log(e)} />
                            <span className="input-group-addon suffix">ETH</span>
                        </div>
                        {loading ? (<button disabled className="btn btn-nft">Processing...</button>) : (<button className="btn btn-nft" onClick={buyToken}>BUY</button>)}
                        {/* <button className="btn btn-opn">BUY ON OPENSEA</button> */}
                    </>
                ) : (
                    <button className="btn btn-opn" style={{margin: 'auto'}} onClick={connectWallet}>CONNECT WALLET</button>
                )}
            </div>

            <div className="buy-mintM">
                {account ? (
                    <>
                        <input className="mint-input mint-inputM" type="number" name="" id="" placeholder="Amount" value={mintCount} onChange={mintCountOnChange} />
                        <div className="input-group-presuffix input-group-presuffixM">
                            <span className="input-group-addon prefix">Price:{" "}</span>
                            <input disabled style={{width: "50%"}} className="mint-input" type="text" name="" id="" value={CONFIG.ICO_RATE} onChange={e=>console.log(e)} />
                            <span className="input-group-addon suffix">ETH</span>
                        </div>
                        {loading ? (<button disabled style={{width: '100%'}} className="btn btn-nft btn-nftM">Processing...</button>) : (<button className="btn btn-nft" style={{width: '100%'}} onClick={buyToken}>BUY</button>)}
                        {/* <button className="btn btn-opn btn-opnM">BUY ON OPENSEA</button> */}
                    </>
                ) : (
                    <button className="btn btn-opn btn-opnM" style={{margin: 'auto'}} onClick={connectWallet}>CONNECT WALLET</button>
                )}
            
            </div>
            {error && (<div id="snackbar" className='show'>{errorMsg}</div>)}
        </>
    )
}

export default BuyMint