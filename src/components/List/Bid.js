import React from 'react';

const Bid = ({ id, carTitle, amount, created }) => (
  <li className="bids__item">
    {id} {carTitle} {amount} {created}
  </li>
);

export default Bid;
