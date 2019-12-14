import React from 'react';
import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

class Form extends React.Component {
  state = {
    id: '',
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
    return (
      <div className="form__wrapper">
        <Title>Add new Merchant</Title>
        <form
          autoComplete="off"
          className="form__form"
          onSubmit={event => this.props.submitFn(event, this.state)}
        >
          <Input
            onChange={this.handleInputChange}
            value={this.state.id}
            name="id"
            label="Id"
            maxLength={10}
          />
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

export default Form;
