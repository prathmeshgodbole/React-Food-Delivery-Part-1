import CartContext from "./cart-context";
const CartProvider = props => {
    const cartContext={
        items:[],
        totalAmount:,
        add
    }
    return (<CartContext.Provider>{props.children}</CartContext.Provider>);
};
export default CartProvider;