import React, { useRef, useEffect, useCallback, useState } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = ({show, children, onHide, closeOutside = true, width = null}) => {
  //onAnimationEnd/onAnimationStart
  const modalRef = useRef();
  const className = show ? `modal-clever active` : 'modal-clever';
  const handleUserKeyPress = useCallback(e => {
    console.log('handleUserKeyPress');
    if (e.code === 'Escape' && onHide){
      onHide(false);
    }
  }, []);

  const clickOutside = (e) => {
    console.log('clickOutside');
    if (closeOutside && e.target === modalRef.current && onHide) {
      onHide(false);
    }
  };

  useEffect(() => {
    console.log('START USE EFFECT')
    window.addEventListener("keydown", handleUserKeyPress);
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
      window.removeEventListener("mousedown", clickOutside);
      console.log('END USE EFFECT')
    }
  }, [clickOutside, handleUserKeyPress]);

  return createPortal(
    <div className={className} ref={modalRef}>
      <div className="modal-clever-content" style={{width: width}}>
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;