import classes from './Cart.module.css';

const Cart = (props) => {
    const CartItems=[{id:'c1', name:'Sushi', amount:2,price:12.99},].map((item)=><li></li></li>);
    return ( <div>
    {CartItems}
        <div></div>
        <div></div>
    </div>
    );
};

export default Cart;