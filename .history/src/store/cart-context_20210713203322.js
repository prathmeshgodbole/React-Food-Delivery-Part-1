const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
})
export default CartContext;