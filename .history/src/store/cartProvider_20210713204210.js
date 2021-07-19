import CartContext from "./cart-context";
const CartProvider = props => {
   const addItemToCartHandler=()=>{}
   const removeItemToCartHandler=()=>{}

   
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:,
        removeItem:
    };
    return (<CartContext.Provider>{props.children}</CartContext.Provider>);
};
export default CartProvider;