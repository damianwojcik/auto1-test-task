import React from 'react';
import ListItem from './ListItem';
import './List.css';

const List = props => (
  <ul className="list__wrapper">
    {props.items.map(item => (
      <ListItem
        key={item.id}
        {...item}
        removeMerchantFn={props.removeMerchantFn}
      />
    ))}
  </ul>
);

export default List;
