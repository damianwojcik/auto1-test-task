import React from 'react';
import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Form = ({ submitFn }) => (
  <div className="form__wrapper">
    <Title>Add new Merchant</Title>
    <form autoComplete="off" className="form__form" onSubmit={submitFn}>
      <Input name="id" label="Id" maxLength={10} />
      <Input name="firstname" label="First Name" maxLength={30} />
      <Input name="lastname" label="Last Name" maxLength={30} />
      <Input name="avatarUrl" label="Avatar Url" />
      <Input type="email" name="email" label="Email" />
      <Input name="phone" label="Phone" />
      <div className="form__item">
        <input name="premium" type="checkbox" />
        <label htmlFor="premium">Premium</label>
      </div>
      <Button>Add new Merchant</Button>
    </form>
  </div>
);

export default Form;
