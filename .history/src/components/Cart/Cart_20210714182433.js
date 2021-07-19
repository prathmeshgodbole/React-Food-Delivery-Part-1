import { useContext } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from '../UI/Modal';

const Cart = (props) => {

  const cartCtx =useContext(CartContext);

  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  
  const hasItems=cartCtx.items.length>0;
  
  const addCartItemHandler=(item)=>{};

  const removeCartItemHandler=(id)=>{};

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={addCartItemHandler.bind(null,item)} onRemove={removeCartItemHandler.bind}/>
      ))}
    </ul>
  );
  
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
