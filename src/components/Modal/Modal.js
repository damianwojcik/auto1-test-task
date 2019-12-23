import React from 'react';
import { connect } from 'react-redux';
import './Modal.css';
import Form from '../Form/Form';
import { closeModal as closeModalAction } from '../../actions';

const Modal = ({ closeModal }) => (
  <div className="modal__wrapper">
    <button className="modal__closeButton" onClick={closeModal}></button>
    <Form />
  </div>
);

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModalAction())
});

export default connect(null, mapDispatchToProps)(Modal);
