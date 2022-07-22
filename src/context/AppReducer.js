export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_ACCOUNT':
            return {
                ...state,
                account: null,
                blockchainData: null
            }
        case 'ADD_ACCOUNT':
            return {
                ...state,
                account: action.payload
            }

        case 'LOAD_CONTRACT': 
            return {
                ...state, 
                blockchainData: action.payload
            }
        
        case 'NETWORK': 
            return {
                ...state,
                network: action.payload
            }
        case 'Add_WEB3': 
            return {
                ...state,
                web3: action.payload
            }
        default:
            return state;
    };
}