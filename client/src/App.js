import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Reading List</h1>
                <BookList />
                {/* <AuthorList /> */}
                <AddBook />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;