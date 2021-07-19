import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return 
        (<div>
        <Fragment>
    <header className={classes.header}>
    <h1>React Meals</h1>
    <button>cart</button>
    </header>
    <div className={classes['main-image']}>
    <img src={mealsImage} alt='A table full of delicious food..!!'/>
    </div>
</Fragment>
</div>
);
};

export default Header;