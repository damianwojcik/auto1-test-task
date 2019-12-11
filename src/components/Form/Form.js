import React from 'react';
import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

class Form extends React.Component {
  state = {
    checked: false
  };
  handleCheckboxChange = () =>
    this.setState(prevState => ({
      checked: !prevState.checked
    }));

  render() {
    return (
      <div className="form__wrapper">
        <Title>Add new Merchant</Title>
        <form
          autoComplete="off"
          className="form__form"
          onSubmit={this.props.submitFn}
        >
          <Input name="id" label="Id" maxLength={10} />
          <Input name="firstname" label="First Name" maxLength={30} />
          <Input name="lastname" label="Last Name" maxLength={30} />
          <Input name="avatarUrl" label="Avatar Url" />
          <Input type="email" name="email" label="Email" />
          <Input name="phone" label="Phone" />
          <div className="form__item form__item--left">
            <input
              name="premium"
              type="checkbox"
              checked={this.state.checked ? 'checked' : ''}
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
