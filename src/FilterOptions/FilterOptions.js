import React, { Component } from 'react';


class FilterOptions extends Component {
  
    render() {
  
    return (
        <div className="filterOptions">
            <div className="selection">
                <label htmlFor="print-type">Print Type: </label>
                <select id="print-type" onChange={e => this.props.onPrintFilter(e.target.value)}>
                    <option value="All" defaultValue>All</option>
                    <option value="BOOK">Books</option>
                    <option value="MAGAZINE">Magazines</option>
                </select>
            </div>
            <div className="selection">
                <label htmlFor="book-type">Book Type: </label>
                <select id="book-type" onChange={e => this.props.onBookFilter(e.target.value)}>
                    <option value="All" defaultValue>All</option>
                    <option value="eBook">eBook</option>
                    <option value="paper">Paper</option>
                </select>
            </div>
        </div>
    );
  }
}

export default FilterOptions;