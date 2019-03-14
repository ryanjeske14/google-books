import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList'
import { type } from 'os';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        books:[],
        printType: "All",
        bookType: "All"
    };
  }

  handlePrintFilter(printType) {
    this.setState({
      printType: printType
    })
  }

  handleBookFilter(bookType) {
    console.log(bookType)
    this.setState({
      bookType: bookType
    })
  }

  handleSubmit(searchTerm) {
    //this will take the user search input from SearchBox as an argument and insert it into the API call as a query parameter
    //it will then use GET to reach out to the API for results
    //the results will then be stored in a variable to be passed back down to BookList
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCIs6Cp4FLkqdZmQHubBdTJRhpn31EzcBc`
    
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
         books: data.items
        })
      })
      .catch(err => this.setState({
        error: err.message
      }))
  }
  


  render() {
    
    const error = this.state.error ? <div className="appError">{this.state.error}</div> : "";

    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar 
          onSubmit={searchTerm => this.handleSubmit(searchTerm)}
          onPrintFilter={printType => this.handlePrintFilter(printType)}
          onBookFilter={bookType => this.handleBookFilter(bookType)}/>
         {error}  
        <BookList 
          books={this.state.books} 
          printFilter={this.state.printType}
          bookFilter={this.state.bookType}/>
      </main>
    );
  }
}

export default App;