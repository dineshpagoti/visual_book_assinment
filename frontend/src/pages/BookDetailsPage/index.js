
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css'; 

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/books/${id}`)
      .then((response) => {
        setBook(response.data);
        console.log('Fetched book details:', response.data);
      })
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  const addToLibrary = () => {
    if (book) {
      let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
      myLibrary.push(book);
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
      alert('Added to My Library'); 
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p>{book.description}</p>
      <button onClick={addToLibrary}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
