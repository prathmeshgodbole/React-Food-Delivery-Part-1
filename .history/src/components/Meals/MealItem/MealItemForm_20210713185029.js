import classes from './MealItemForm.module.css';
const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <input></input>
            <button className={classes.button}>+ Add</button>
        </form>
    );
};
export default MealItemForm;