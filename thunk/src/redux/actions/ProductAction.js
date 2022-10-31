 import { ActionTypes } from "../constants/actionTypes";

 export const setProducts = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
 }

 export const selectedProduct = (product)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
 }

 export const removeSelectedProduct = ()=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        
    }
 }

 export const usersData = (user)=>{
    return {
        type: ActionTypes.USERS_DATA,
        payload: user
    }
 }

 export const addToCart = (basket)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload: basket
    }
 }

//  export const removeProduct = (remove)=>{
//     return {
//         type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//         payload: remove
//     }
//  }