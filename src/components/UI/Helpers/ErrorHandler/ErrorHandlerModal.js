
import React from "react";
import ReactDOM from 'react-dom';

import classes from './ErrorHandlerModal.module.css'

const Back = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <p>{props.data}</p>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onConfirm}>
          Okay
        </button>
      </div>
    </div>
  );
}


const ErrorHandlerModal = (props) => {
  console.log(props.data);
  return(
    <React.Fragment>
      {ReactDOM.createPortal(
        <Back onConfirm={props.onConfirm}/>,
        document.getElementById('back-root')
      )}
      {ReactDOM.createPortal(
        <Modal data={props.data} onConfirm={props.onConfirm}/>
      , document.getElementById('overlay-root')
      )}
    </React.Fragment>
    
    );
}

export default ErrorHandlerModal;