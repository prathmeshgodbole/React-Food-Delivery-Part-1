import CartContext from "./cart-context";
const CartProvider = props => {
    const cartContext={
        items:[],
        totalAmount:,
        addItem
    }
    return (<CartContext.Provider>{props.children}</CartContext.Provider>);
};
export default CartProvider;