import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
        return ( 
            useContext(cart);
            <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
            <span clasName={classes}>Your Cart</span>
            <span className={classes.badge}>3</span>
            </button>);
        };
        export default HeaderCartButton;