import { createContext, useReducer } from "react";
import { AppReducer } from './AppReducer'

const initialState = {
    account: null, 
    blockchainData: null, 
    network: null,
    web3: null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const delAccount = () => {
        dispatch({
            type: 'DELETE_ACCOUNT'
        })
    }

    const addAccount = (account) => {
        dispatch({
            type: 'ADD_ACCOUNT',
            payload: account.id
        })
    }

    const addNetwork = (network) => {
        dispatch({
            type: 'NETWORK', 
            payload: network
        })
    }

    const addWeb3 = (web3) => {
        dispatch({
            type: 'Add_WEB3', 
            payload: web3
        })
    }

    const addBlockchain = (blockchainData) => {
        dispatch({
            type: 'LOAD_CONTRACT', 
            payload: blockchainData
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                account: state.account, 
                blockchainData: state.blockchainData,
                network: state.network,
                web3: state.web3,
                delAccount, 
                addAccount,
                addNetwork,
                addBlockchain,
                addWeb3
            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}