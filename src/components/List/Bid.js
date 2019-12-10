import React from 'react';
import './Bid.css';

const Bid = ({ id, carTitle, amount, created }) => (
  <li className="bid">
    {carTitle}: {amount} $ <small>{created}</small>
  </li>
);

export default Bid;
