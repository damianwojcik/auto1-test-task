import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import './List.css';

const List = ({ items }) => (
  <div>
    {items.length ? (
      <ul className="list__wrapper">
        {items.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
    ) : (
      <h2>There's nothing here yet, please add new Merchant</h2>
    )}
  </div>
);

const mapStateToProps = state => {
  const { items } = state;
  return { items };
};

export default connect(mapStateToProps)(List);
