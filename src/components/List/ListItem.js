import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import Bid from './Bid';
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({
  id,
  firstname,
  lastname,
  avatarUrl,
  email,
  phone,
  hasPremium,
  bids,
  removeMerchantFn
}) => {
  const ImageTag = avatarUrl ? 'img' : 'div';
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
        Bids:
        <ul className="bids">
          {bids.map(item => (
            <Bid key={item.id} {...item} />
          ))}
        </ul>
        <Button className="button__element" href={id}>
          Edit
        </Button>
        <Button
          className="button__element danger"
          onClick={() => removeMerchantFn(id)}
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

export default ListItem;
