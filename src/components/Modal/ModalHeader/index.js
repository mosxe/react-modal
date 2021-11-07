import React from 'react';
import './header.scss';

const ModalHeader = ({children}) => {
  return (
    <div className="modal-header">
      {children}
    </div>
  );
};

export default ModalHeader;