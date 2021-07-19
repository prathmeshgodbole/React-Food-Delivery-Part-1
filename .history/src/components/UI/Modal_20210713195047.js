import { Fragment } from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const PortalElement=document.get

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>)}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>)}
    </Fragment>
  );
};
export default Modal;
