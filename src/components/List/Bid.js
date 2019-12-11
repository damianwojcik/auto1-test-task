import React from 'react';
import './Bid.css';
import formatDate from '../../utils/formatDate';

const Bid = ({ id, carTitle, amount, created }) => (
  <li className="bid">
    {carTitle}: {amount} $ <small>{formatDate(created)}</small>
  </li>
);

export default Bid;
