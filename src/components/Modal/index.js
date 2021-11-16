﻿import React, { useRef, useEffect, useState } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = ({show, children, onHide, closeOutside = true, width = null, escapeKey = true}) => {
  const [render, setRender] = useState(show);
  const modalRef = useRef();
  const className = show ? `modal-clever show` : 'modal-clever hide';

  useEffect(() => {
    if (show) {
      setRender(true);
      document.body.style.overflow = 'hidden';
    };
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  const handleUserKeyPress = (e) => {
    if (e.code === 'Escape' && escapeKey && onHide){
      onHide(false);
    }
  };

  const clickOutside = (e) => {
    if (closeOutside && e.target === modalRef.current && onHide) {
      onHide(false);
    }
  };

  useEffect(() => {
    if (show) {
      window.addEventListener("keydown", handleUserKeyPress);
      window.addEventListener("mousedown", clickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
      window.removeEventListener("mousedown", clickOutside);
    }
  }, [clickOutside, handleUserKeyPress, show]);
  
  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return render && createPortal(
    <div className={className} ref={modalRef} onAnimationEnd={onAnimationEnd}>
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