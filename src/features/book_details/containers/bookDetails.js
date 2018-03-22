import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BookDetails extends Component {
  static propTypes = {

  };

  render() {
    if (!this.props.book) {
      return <h3>There is no selected books yet.</h3>
    }

    return (
      <div className="col list-group col-sm-4">
        <h3>Details for:</h3>
        <div><b>Title:</b> {this.props.book.title}</div>
        <div><b>Pages:</b> {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetails);
