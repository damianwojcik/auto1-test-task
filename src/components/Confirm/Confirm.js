import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import './Confirm.css';
import { closeModal as closeModalAction } from '../../actions';
import { removeItem as removeItemAction } from '../../actions';

const Confirm = ({ item, closeModal, removeItem }) => (
  <div className="confirm">
    <h3>Are you sure you want delete this Merchant?</h3>
    <Button
      onClick={() => removeItem(item[0].id)}
      className="button__element button__element--danger"
    >
      Yes
    </Button>
    <Button onClick={closeModal}>No</Button>
  </div>
);

const mapStateToProps = state => {
  const { item } = state;
  return { item };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModalAction()),
  removeItem: id => dispatch(removeItemAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
