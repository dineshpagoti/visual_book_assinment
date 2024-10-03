// src/pages/HomePage/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../../components/BookCard';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:5001/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
