import classes from './Modal.module.css';

const Backdrop = props => {
    return(<div className={classes.backdrop}></div>);
};
const Overlays = props => {return(<div className={classes.modal}/><div className={classes.modal}/>);};

const Modal = props => {
    return (<div></div>);
};
export default Modal;