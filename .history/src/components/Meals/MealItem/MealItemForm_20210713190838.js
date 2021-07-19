import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label='Amount' input={{id:'amount'}}/>
            <button className={classes.button}>+ Add</button>
        </form>
    );
};
export default MealItemForm;