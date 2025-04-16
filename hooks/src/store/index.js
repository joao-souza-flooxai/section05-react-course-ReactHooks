export  const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export function reducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number +2};

        case 'login':
            return {...state, user: {name : action.payload}};

        case 'numberMulti7':
            return {...state, number: state.number * 7};
        
        case 'numberDiv25':
            return {...state, number: state.number / 25};  
    
        case 'numberInt':
            return {...state, number: parseInt(state.number)};  
        
        default:
            return state;
    }
}
