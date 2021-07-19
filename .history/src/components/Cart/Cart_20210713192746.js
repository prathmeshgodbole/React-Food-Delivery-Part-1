import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {CartItems}
      <div><span></span></div>
      <div></div>
    </div>
  );
};

export default Cart;