import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';


class AuthorList extends Component {
  displayAuthors() {
    var data = this.props.data;
    if (data.loading) {
      return (<div>Loading Authors...</div>)
    } else {
      // loading is complete
      if (!data || !data.authors || !data.authors.length) return (<div>No authors registered in the database.</div>)
      return data.authors.map(author => {
        return (
          <li key={author.id}> {author.name} ({author.age}) </li>
        );
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Author List</h2>
        <ul id="Author-list">
          { this.displayAuthors() }
        </ul>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AuthorList);