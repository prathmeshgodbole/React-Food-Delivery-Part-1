import { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from '../UI/Modal';

const Cart = (props) => {

  const cartCtx =useContext(CartContext);
  const totalAmount=`$${cartCtx.totalAmount.fixed(2)}`;
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>{totalAmount}</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
