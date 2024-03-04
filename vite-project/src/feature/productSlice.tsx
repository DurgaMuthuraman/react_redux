import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    
    cart : []
}
const productSlice = createSlice(
    {
        name : "cart",
        initialState,
        reducers:{
            initProducts: (state : any ,action) =>{
                return { ...state, products: action.payload };
            },
            
        }
    }
)

export const { initProducts}=productSlice.actions;
export default productSlice.reducer