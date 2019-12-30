import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ListItem.css';
import Bid from './Bid';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { removeItem as removeItemAction } from '../../actions';
import { openModal as openModalAction } from '../../actions';

const ListItem = ({
  id,
  firstname,
  lastname,
  avatarUrl,
  email,
  phone,
  hasPremium,
  bids,
  removeItem,
  openModal
}) => {
  const ImageTag = avatarUrl ? 'img' : 'div';
  const removeItemFn = id => {
    if (window.confirm('Are you sure you want delete this Merchant?')) {
      removeItem(id);
    }
  };

  return (
    <li className="listItem__wrapper">
      <ImageTag
        className={avatarUrl ? 'listItem__image' : 'listItem__imageNone'}
        src={avatarUrl}
        alt={lastname}
      />
      <div>
        <Title>
          {firstname} {lastname}
          {hasPremium ? <span className="premium">Premium</span> : ''}
        </Title>
        <p className="listItem__description">
          Email: <a href={'mailto:' + email}>{email}</a> | Phone:
          <a href={'tel:' + phone}> {phone}</a>
        </p>
        {bids.length ? (
          <div>
            <span>Bids:</span>
            <ul className="bids">
              {bids
                .sort((a, b) => b.created - a.created)
                .map(item => (
                  <Bid key={item.id} {...item} />
                ))}
            </ul>
          </div>
        ) : (
          ''
        )}
        <Button className="button__element" onClick={() => openModal(id)}>
          Edit
        </Button>
        <Button
          className="button__element danger"
          onClick={() => removeItemFn(id)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  hasPremium: PropTypes.bool,
  bids: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      carTitle: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired
    })
  )
};

ListItem.defaultProps = {
  hasPremium: false,
  avatarUrl: null
};

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
  openModal: id => dispatch(openModalAction(id))
});

export default connect(null, mapDispatchToProps)(ListItem);
