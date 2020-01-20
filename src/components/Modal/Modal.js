import React from 'react';
import { connect } from 'react-redux';
import './Modal.css';
import { closeModal as closeModalAction } from '../../actions';

const Modal = ({ children, closeModal }) => (
  <div className="modal__backdrop">
    <div className="modal__wrapper">
      <button className="modal__closeButton" onClick={closeModal}></button>
      {children}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModalAction())
});

export default connect(null, mapDispatchToProps)(Modal);
