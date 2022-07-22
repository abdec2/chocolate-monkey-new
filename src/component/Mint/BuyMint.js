import React from 'react'

import { useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { GlobalContext } from "./../../context/GlobalContext";
import Web3Modal from 'web3modal';
import CONFIG from './../../config/config.json'
import ABI from './../../config/abi.json';
import WalletConnectProvider from "@walletconnect/web3-provider";

import './buymint.css'

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
    const [mintCount, setMintCount] = useState(1)
    const [nftCost, setNftCost] = useState(0.00)
    const [loading, setLoading] = useState(false)

    const loadBlockChain = async () => {
        if (web3 && account) {
            try {
                const contract = new ethers.Contract(contractAddress, ABI, web3);
                const cost = await contract.getNFTPrice();
                setNftCost(ethers.utils.formatEther(cost.toString()))
                addBlockchain({
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

    const claimNFT = async () => {
        console.log('asdasd')
        try {
            setLoading(true)
            let cost = blockchainData.nftPrice;
            let gasLimit = 285000;
            let totalCost = cost.mul(mintCount);
            let totalGasLimit = String(gasLimit * mintCount);

            console.log("Cost: ", totalCost);
            console.log("Gas limit: ", totalGasLimit);


            const signer = web3.getSigner()

            const contractWithSigner = blockchainData.contract.connect(signer)

            const tx = await contractWithSigner.mint(mintCount, { value: totalCost, gasLimit: totalGasLimit })
            const receipt = await tx.wait()
            console.log(receipt)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }

    const mintCountOnChange = (e) => {
        if(parseInt(e.target.value) < 1) {
            setMintCount(1)
        } else {
            setMintCount(parseInt(e.target.value))
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
            <div className="buy-mint">
                {account ? (
                    <>
                        <input className="mint-input" type="number" placeholder="Number of NFT's" value={mintCount} onChange={mintCountOnChange} />
                        <div className="input-group-presuffix">
                            <span className="input-group-addon prefix">Price:{" "}</span>
                            <input disabled className="mint-input" type="text" name="" id="" value={(parseFloat(nftCost) * parseInt(mintCount)).toFixed(2)} onChange={e=>console.log(e)} />
                            <span className="input-group-addon suffix">ETH</span>
                        </div>
                        {loading ? (<button disabled className="btn btn-nft">Processing...</button>) : (<button className="btn btn-nft" onClick={claimNFT}>BUY NFT'S</button>)}
                        <button className="btn btn-opn">BUY ON OPENSEA</button>
                    </>
                ) : (
                    <button className="btn btn-opn" style={{margin: 'auto'}} onClick={connectWallet}>CONNECT WALLET</button>
                )}
            </div>

            <div className="buy-mintM">
                {account ? (
                    <>
                        <input className="mint-input mint-inputM" type="number" name="" id="" placeholder="Number of NFT's" value={mintCount} onChange={mintCountOnChange} />
                        <div className="input-group-presuffix input-group-presuffixM">
                            <span className="input-group-addon prefix">Price:{" "}</span>
                            <input disabled className="mint-input" type="text" name="" id="" value={(parseFloat(nftCost) * parseInt(mintCount)).toFixed(2)} onChange={e=>console.log(e)} />
                            <span className="input-group-addon suffix">ETH</span>
                        </div>
                        {loading ? (<button disabled className="btn btn-nft btn-nftM">Processing...</button>) : (<button className="btn btn-nft" onClick={claimNFT}>BUY NFT'S</button>)}
                        <button className="btn btn-opn btn-opnM">BUY ON OPENSEA</button>
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