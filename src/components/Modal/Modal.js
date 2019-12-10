import React from 'react';
import './Modal.css';
import Form from '../Form/Form';

const Modal = ({ closeModalFn, addMerchantFn }) => (
  <div className="modal__wrapper">
    <bitton className="modal__closeButton" onClick={closeModalFn}>
      &times;
    </bitton>
    <Form submitFn={addMerchantFn} />
  </div>
);

export default Modal;
