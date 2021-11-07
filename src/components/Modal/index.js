import React, { useState, useRef, useEffect, useCallback } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = ({show, children, onHide, closeOutside = true}) => {
  const modalRef = useRef();
  const className = show ? `modal-clever active` : 'modal-clever';
  const handleUserKeyPress = useCallback(e => {
    if (e.code === 'Escape' && onHide){
      onHide(false);
    }
  }, []);

  const clickOutside = (e) => {
    if (closeOutside && e.target === modalRef.current && onHide) {
      onHide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => window.removeEventListener("keydown", handleUserKeyPress);
  }, [handleUserKeyPress]);

  //Объединить возможно useEffect?
  useEffect(() => {
     window.addEventListener("mousedown", clickOutside);
    return () => window.removeEventListener("mousedown", clickOutside);
  }, [clickOutside]);

  return createPortal(
    <div className={className} ref={modalRef}>
      <div className="modal-clever-content">
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