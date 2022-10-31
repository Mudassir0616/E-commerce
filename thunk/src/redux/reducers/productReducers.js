
import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products:[],
    selectedproduct:{},
    users:[],
    basket:[]

}


export const productReducers = (state=initialState, action)=>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {... state, products: action.payload}

        case ActionTypes.SELECTED_PRODUCT:
            return {... state, selectedproducts: action.payload}

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { }

        case ActionTypes.USERS_DATA:
            return {... state, users: action.payload}
        
        case ActionTypes.ADD_TO_CART:
            return {basket:[...state.basket, action.payload]}
        default:
            return state
    }
}

