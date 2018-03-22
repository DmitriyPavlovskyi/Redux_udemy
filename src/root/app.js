import React, { Component } from 'react';

import BookList from '../features/book-list/containers/bookList';
import BookDetails from '../features/book_details/containers/bookDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="row">
        <BookList />
        <BookDetails />
      </div>
    );
  }
}

export default App;
