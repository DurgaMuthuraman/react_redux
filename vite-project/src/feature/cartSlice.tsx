import {createSlice} from "@reduxjs/toolkit";
import Product from "../components/Product";

const initialState = {
    products: [],
    cart : []
}
const cartSlice = createSlice(
    {
        name : "cart",
        initialState,
        reducers:{
            addToCart: (state : any,action)=>{
                return { ...state,cart: [...state.cart,[action.payload]]};
            },
            removeFromCart: (state : any,action)=>{
                return { ...state,cart: state.cart.filter(
                (product:any)=>product.id !==action.payload
                )};
            }
        }
    }
)

export const { addToCart, removeFromCart}=cartSlice.actions;
export default cartSlice.reducer