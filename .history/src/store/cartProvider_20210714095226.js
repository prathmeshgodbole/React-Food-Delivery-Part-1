import { useReducer } from "react";
import CartContext from "./cart-context";
const CartProvider = props => {
   const addItemToCartHandler=item=>{};
   const removeItemFromCartHandler=id=>{};

   const defaultCartState={
item:[],
totalAmount:0,
   };

   const cartReducer=(state,action)=>{
return defau
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