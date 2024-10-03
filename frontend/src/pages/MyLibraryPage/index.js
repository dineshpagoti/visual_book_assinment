import React, { useState, useEffect } from 'react';

const MyLibraryPage = () => {
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
    const storedLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
    setMyLibrary(storedLibrary);
  }, []);

  const removeBook = (id) => {
    const updatedLibrary = myLibrary.filter(book => book.id !== id);
    setMyLibrary(updatedLibrary);
    localStorage.setItem('myLibrary', JSON.stringify(updatedLibrary));
  };

  return (
    <div>
      <h1>My Library</h1>
      {myLibrary.length === 0 ? (
        <p>No books in your library</p>
      ) : (
        <div className="book-list">
          {myLibrary.map(book => (
            <div key={book.id}>
              <h2>{book.title}</h2>
              <button onClick={() => removeBook(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibraryPage;
