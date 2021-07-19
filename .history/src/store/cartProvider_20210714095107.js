import { useReducer } from "react";
import CartContext from "./cart-context";
const CartProvider = props => {
   const addItemToCartHandler=item=>{};
   const removeItemFromCartHandler=id=>{};

   const defaultCart=>{

   }
   const cartReducer=(state,action)=>{

   }

    const cartContext={
        items:[],
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>);
};
export default CartProvider;