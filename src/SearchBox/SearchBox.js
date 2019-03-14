import React, { Component } from 'react';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
    }

    searchTermChanged(searchTerm) {
        this.setState({
            searchTerm
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.onSubmit(e.target.value)
        const search = this.state.searchTerm.split(' ').join('+');
        this.props.onSubmit(search);
    }
  
    render() {

    return (
      <div>
          <form className="searchBar" onSubmit={this.handleSubmit}>
              <label htmlFor="search">Search: </label>
              <input 
              type="text" 
              placeholder="Search for a book" 
              id="search"
              onChange={e => this.searchTermChanged(e.target.value)} />
              <button type="submit">Search</button>
          </form>
      </div>
      
    );
  }
}

export default SearchBox;