import classes from './Cart.module.css';

const Cart = (props) => {
    const CartItems=[{id:'c1', name:'Sushi', amount:12.99}]
    return ( <div>
    {CartItems}
        <div></div>
        <div></div>
    </div>
    );
};

export default Cart;