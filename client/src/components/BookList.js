import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';


// components
import BookDetails from './BookDetails';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return (<div>Loading Books...</div>)
    } else {
      // loading is complete
      if (!data || !data.books || !data.books.length) return (<div>No books registered in the database.</div>)
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={ e => { this.setState({ selected: book.id })}}  > {book.name} </li>
        );
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Book List</h2>
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
        <BookDetails bookId={ this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);