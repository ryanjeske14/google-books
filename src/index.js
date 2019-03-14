import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const BOOKS = [
    {"title": "Pride and Justice 0", "author": "Jane Austen 0", "description": "this is the description 0"},
    {"title": "Pride and Justice 1", "author": "Jane Austen 1", "description": "this is the description 1"},
    {"title": "Pride and Justice 2", "author": "Jane Austen 2", "description": "this is the description 2"}
]

ReactDOM.render(<App books={BOOKS}/>, document.getElementById('root'));