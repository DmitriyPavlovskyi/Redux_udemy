import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../AC/selectBook';
import { bindActionCreators } from 'redux';

import BookItem from '../components/bookItem';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <BookItem
          onSelectBook = {this.props.selectBook}
          book={book}
          key={book.title}
        />
      )
    });
  };
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
