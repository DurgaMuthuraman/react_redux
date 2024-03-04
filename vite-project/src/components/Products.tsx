import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { initProducts } from "../feature/productSlice";
import {getProducts}from "../feature/cartSlice"

const Products = () => {
   const dispatch = useDispatch();
   const {products} = useSelector((state:any) => state.products)
   const {cart} = useSelector((state:any) => state.cart)
    console.log(products);
    useEffect( () => {
        
        axios.get("https://fakestoreapi.com/products").then((res)=> dispatch(initProducts(res?.data)) );
},[])
  return (
    <div>
      
    </div>
  )
}

export default Products

