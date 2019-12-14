import React from 'react';
import ListItem from './ListItem';
import './List.css';

const List = ({ items, removeMerchantFn }) => (
  <div>
    {items.length ? (
      <ul className="list__wrapper">
        {items.map(item => (
          <ListItem
            key={item.id}
            {...item}
            removeMerchantFn={removeMerchantFn}
          />
        ))}
      </ul>
    ) : (
      <h2>There's nothing here yet, please add new Merchant</h2>
    )}
  </div>
);

export default List;
