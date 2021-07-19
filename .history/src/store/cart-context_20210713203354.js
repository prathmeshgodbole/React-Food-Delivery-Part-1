import React from 'react';
const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    remove
})
export default CartContext;