import React, { Component } from 'react';
import logo from '../../logo.png';
import './Root.css';
import List from '../../components/List/List';
import initialStateItems from '../../data/data';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

class Root extends Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: false
  };

  addMerchant = event => {
    event.preventDefault();
    const newMerchant = {
      id: event.target[0].value,
      firstname: event.target[1].value,
      lastname: event.target[2].value,
      avatarUrl: event.target[3].value,
      email: event.target[4].value,
      phone: event.target[5].value,
      hasPremium: event.target[6].checked,
      bids: []
    };

    this.setState(prevState => ({
      items: [newMerchant, ...prevState.items]
    }));

    event.target.reset();
    this.closeModal();
  };

  removeMerchant = id => {
    const items = [...this.state.items];
    const deletedItem = items.find(item => item.id == id);
    const index = items.indexOf(deletedItem);
    if (
      window.confirm('Are you sure you want to delete this Merchant?') &&
      index !== -1
    ) {
      items.splice(index, 1);
      this.setState({ items });
    }
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <div className="App-body">
          <Button onClick={this.openModal} secondary>
            Add new Merchant
          </Button>
          <List
            removeMerchantFn={this.removeMerchant}
            items={this.state.items}
          />
        </div>
        {isModalOpen && (
          <Modal
            addMerchantFn={this.addMerchant}
            closeModalFn={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default Root;
