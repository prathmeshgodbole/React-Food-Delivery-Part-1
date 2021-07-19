import React from 'react';
import classes from './Header.module.css';
import img from '../../assets/meals.jpg';

const Header = (props) = {
    return 
        (
        
        <React.Fragment>
    <header className={classes.header}>
    <h1>React Meals</h1>
    <button>cart</button>
    </header>
    <div className={classes['main-image']}>
    <img src={mealsImage} alt='A table full of delicious food..!!'/>
    </div>
</React.Fragment>

);
};

export default Header;