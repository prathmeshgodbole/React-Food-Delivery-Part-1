import classes from './Input.module.css';

const Input=(props)=>{
    return(
<div className={classes.input}>
<label htmlFor={props.input.id}>{}</label>
    <input></input>
</div>
    );
};
export default Input;