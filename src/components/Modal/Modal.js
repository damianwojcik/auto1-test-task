import React from 'react';
import './Modal.css';
import Form from '../Form/Form';

const Modal = ({ closeModalFn, addMerchantFn }) => (
  <div className="modal__wrapper">
    <button className="modal__closeButton" onClick={closeModalFn}></button>
    <Form submitFn={addMerchantFn} />
  </div>
);

export default Modal;
