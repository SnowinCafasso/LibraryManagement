import React from 'react';
import BookItem from './BookItem';
import './BookList.css'; // 👈 import the CSS file

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Copies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
