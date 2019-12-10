import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import List from './components/List/List';
import initialStateItems from './data/data';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    items: [...initialStateItems]
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
      items: [...prevState.items, newMerchant]
    }));

    event.target.reset();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <div className="App-body">
          <List items={this.state.items} />
          <Form submitFn={this.addMerchant} />
        </div>
      </div>
    );
  }
}

export default App;
