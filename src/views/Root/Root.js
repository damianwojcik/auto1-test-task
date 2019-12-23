import React from 'react';
import { connect } from 'react-redux';
import { openModal as openModalAction } from '../../actions';
import logo from '../../logo.png';
import './Root.css';
import List from '../../components/List/List';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const Root = ({ isModalOpen, openModal }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome</h2>
    </div>
    <div className="App-body">
      <Button onClick={openModal} secondary>
        Add new Merchant
      </Button>
      <List />
    </div>
    {isModalOpen && <Modal />}
  </div>
);

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
