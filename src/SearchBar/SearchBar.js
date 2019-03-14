import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox'
import FilterOptions from '../FilterOptions/FilterOptions'


class SearchBar extends Component {
  render() {
  
    return (
      <div>
        <SearchBox onSubmit={this.props.onSubmit}/>
        <FilterOptions 
          onPrintFilter={this.props.onPrintFilter}
          onBookFilter={this.props.onBookFilter}/>
      </div>
    );
  }
}

export default SearchBar;