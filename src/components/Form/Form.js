import React from 'react';
import { connect } from 'react-redux';
import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { addItem as addItemAction } from '../../actions';
import { closeModal as closeModalAction } from '../../actions';

class Form extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    avatarUrl: '',
    email: '',
    phone: '',
    hasPremium: false,
    bids: []
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckboxChange = () =>
    this.setState(prevState => ({
      hasPremium: !prevState.hasPremium
    }));

  render() {
    const { addItem, closeModal } = this.props;

    return (
      <div className="form__wrapper">
        <Title>Add new Merchant</Title>
        <form
          autoComplete="off"
          className="form__form"
          onSubmit={e => {
            e.preventDefault();
            addItem(this.state);
            closeModal();
          }}
        >
          <Input
            onChange={this.handleInputChange}
            value={this.state.firstname}
            name="firstname"
            label="First Name"
            maxLength={30}
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.lastname}
            name="lastname"
            label="Last Name"
            maxLength={30}
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.avatarUrl}
            name="avatarUrl"
            label="Avatar Url"
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.email}
            type="email"
            name="email"
            label="Email"
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.phone}
            name="phone"
            label="Phone"
          />
          <div className="form__item form__item--left">
            <input
              name="premium"
              type="checkbox"
              checked={this.state.hasPremium ? 'checked' : ''}
            />
            <label htmlFor="premium" onClick={this.handleCheckboxChange}>
              Premium
            </label>
          </div>
          <Button>Add new Merchant</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) =>
    dispatch(addItemAction(itemType, itemContent)),
  closeModal: () => dispatch(closeModalAction())
});

export default connect(null, mapDispatchToProps)(Form);
