import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState={
    item:[],
    totalAmount:0,
       };
    
       const cartReducer=(state,action)=>{
    return defaultCartState;
       };

const CartProvider = props => {
    const[cartState]=useReducer(cartReducer,defaultCartState);
   const addItemToCartHandler=item=>{};
   const removeItemFromCartHandler=id=>{}; 

    const cartContext={
        items:[],
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>);
};
export default CartProvider;