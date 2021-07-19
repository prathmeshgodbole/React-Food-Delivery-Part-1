import { Fragment } from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const PortalElement=document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, PortalElement)}
    </Fragment>
  );
};
export default Modal;
