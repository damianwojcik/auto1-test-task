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

  addMerchant = (event, newItem) => {
    event.preventDefault();

    this.setState(prevState => ({
      items: [newItem, ...prevState.items]
    }));

    this.closeModal();
  };

  removeMerchant = id => {
    const items = [...this.state.items];
    const deletedItem = items.find(item => item.id === id);
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
