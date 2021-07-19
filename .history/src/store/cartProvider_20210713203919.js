import CartContext from "./cart-context";
const cartProvider = props => {
    return (<CartContext.Provider>{props.children}</CartContext.Provider>);
};
export default Car