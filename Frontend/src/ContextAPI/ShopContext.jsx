import React, { createContext, useState } from "react";
import all_products from './All_Product';
import men_data from "./MenCategory";
export const ShopContext = createContext(null);
const cartProduct = [...all_products,...men_data]
console.log(cartProduct)
const getDefaultCart = () => {
    let cart={};
    for (let idx=0; idx < cartProduct.length+1;idx++){
        cart[idx] = 0;
    }
   
    return cart;
} 

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    const addToCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        
    }
    const RemoveFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartPrice = () => {
        let totalPrice = 0;
        for (let itemId in cartItems) {
            if (cartItems.hasOwnProperty(itemId)) {
                let itemInfo = cartProduct.find(product => product.id === Number(itemId));
                if (itemInfo) {
                    totalPrice += itemInfo.new_price * cartItems[itemId];
                 } 
                
            }
        }
        return totalPrice;
    };
    const getTotalCartOldPrice = () => {
        let totalOldPrice = 0;
        for (let itemId in cartItems) {
            if (cartItems.hasOwnProperty(itemId)) {
                let itemInfo = cartProduct.find(product => product.id === Number(itemId));
                if (itemInfo) {
                    totalOldPrice += itemInfo.old_price * cartItems[itemId];
                 } 
                
            }
        }
        return totalOldPrice;
    };
    const getTotalCartItem=()=>{
        let total_item = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        total_item+=cartItems[item];
                    }
            }
            return total_item;
    }
    const contextValue = {getTotalCartOldPrice,getTotalCartItem,getTotalCartPrice,all_products,men_data,cartProduct,cartItems,addToCart,RemoveFromCart};
    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
        )
}
export default ShopContextProvider;