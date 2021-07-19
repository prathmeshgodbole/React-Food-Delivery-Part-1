import CartContext from "./cart-context";
const CartProvider = props => {
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:,
        remove
    }
    return (<CartContext.Provider>{props.children}</CartContext.Provider>);
};
export default CartProvider;