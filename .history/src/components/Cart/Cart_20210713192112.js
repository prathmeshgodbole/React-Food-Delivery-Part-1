import classes from './Cart.module.css';

const Cart = (props) => {
    const CartItems=[{id:'c1', name:'Sushi'}]
    return ( <div>
    {CartItems}
        <div></div>
        <div></div>
    </div>
    );
};

export default Cart;