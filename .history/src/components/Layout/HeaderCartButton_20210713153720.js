import React from 'react';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
        return ( 
            <button className={classes.button}>
        <span className={classes.icon}></span>
            <span clasName={classes.}>Your Cart</span>
            <span className={classes}>3</span>
            </button>);
        };
        export default HeaderCartButton;