import React,{Fragment} from 'react';
import classes from './Header.module.css';
import img from '../../assets/meals.jpg';

const Header = (props) = {
    return 
        (<Fragment>
    <header class><h1>React Meals</h1><button>cart</button>
    </header>
    <div><img src={mealsImage} alt='A table full of delicious food..!!'/></div>
</Fragment>);
};

export default Header;