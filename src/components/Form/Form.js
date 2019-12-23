import React from 'react';
import { connect } from 'react-redux';
import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { addItem as addItemAction } from '../../actions';
import { closeModal as closeModalAction } from '../../actions';
import { editItem as editItemAction } from '../../actions';

class Form extends React.Component {
  state = {
    id: this.props.item.length ? this.props.item[0].id : '',
    firstname: this.props.item.length ? this.props.item[0].firstname : '',
    lastname: this.props.item.length ? this.props.item[0].lastname : '',
    avatarUrl: this.props.item.length ? this.props.item[0].avatarUrl : '',
    email: this.props.item.length ? this.props.item[0].email : '',
    phone: this.props.item.length ? this.props.item[0].phone : '',
    hasPremium: this.props.item.length ? this.props.item[0].hasPremium : false,
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
    const { addItem, editItem, closeModal } = this.props;
    const {
      firstname,
      lastname,
      avatarUrl,
      email,
      phone,
      hasPremium
    } = this.state;

    return (
      <div className="form__wrapper">
        <Title>{this.props.item.length ? 'Edit' : 'Add new'} Merchant</Title>
        <form
          autoComplete="off"
          className="form__form"
          onSubmit={e => {
            e.preventDefault();
            this.props.item.length
              ? editItem(this.state.id, this.state)
              : addItem(this.state);
            closeModal();
          }}
        >
          <Input
            onChange={this.handleInputChange}
            value={firstname}
            name="firstname"
            label="First Name"
            maxLength={30}
          />
          <Input
            onChange={this.handleInputChange}
            value={lastname}
            name="lastname"
            label="Last Name"
            maxLength={30}
          />
          <Input
            onChange={this.handleInputChange}
            value={avatarUrl}
            name="avatarUrl"
            label="Avatar Url"
          />
          <Input
            onChange={this.handleInputChange}
            value={email}
            type="email"
            name="email"
            label="Email"
          />
          <Input
            onChange={this.handleInputChange}
            value={phone}
            name="phone"
            label="Phone"
          />
          <div className="form__item form__item--left">
            <input
              name="premium"
              type="checkbox"
              checked={hasPremium ? 'checked' : ''}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="premium" onClick={this.handleCheckboxChange}>
              Premium
            </label>
          </div>
          <Button>
            {this.props.item.length ? 'Save' : 'Add new'} Merchant
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { item } = state;
  return { item };
};

const mapDispatchToProps = dispatch => ({
  addItem: itemContent => dispatch(addItemAction(itemContent)),
  editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent)),
  closeModal: () => dispatch(closeModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
