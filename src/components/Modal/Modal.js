import React from 'react';
import './Modal.css';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div className="modal__wrapper">
    <bitton className="modal__closeButton" onClick={closeModalFn}>
      &times;
    </bitton>
    <Form submitFn={this.addMerchant} />
  </div>
);

export default Modal;
