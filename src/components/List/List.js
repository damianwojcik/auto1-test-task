import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import Pagination from '../Pagination/Pagination';
import './List.css';

class List extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 4
  };

  render() {
    const { items } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber =>
      this.setState({
        currentPage: pageNumber
      });

    return (
      <div>
        {items.length ? (
          <ul className="list__wrapper">
            {currentPosts.map(item => (
              <ListItem key={item.id} {...item} />
            ))}
          </ul>
        ) : (
          <h2>There's nothing here yet, please add new Merchant</h2>
        )}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalPosts={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { items } = state;
  return { items };
};

export default connect(mapStateToProps)(List);
