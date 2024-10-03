// src/components/BookCard/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/books/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
