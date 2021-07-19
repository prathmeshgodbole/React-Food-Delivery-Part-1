import { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content} >{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return( <div></div>);
};
export default Modal;
