import CartContext from "./cart-context";
const CartProvider = props => {
   const addItemToCartHandler=item=>{};
   const removeItemFromCartHandler=id=>{};

   
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:remove
    };
    return (<CartContext.Provider>{props.children}</CartContext.Provider>);
};
export default CartProvider;