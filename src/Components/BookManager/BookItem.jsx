import React from 'react';

const BookItem = ({ book, onEdit, onDelete }) => (
  <li>
    <strong>{book.title}</strong> by {book.author}<br />
    Genre: {book.genre} | Copies: {book.copies}<br />
    <button onClick={() => onEdit(book)}>Edit</button>
    <button onClick={() => onDelete(book.id)}>Delete</button>
  </li>
);

export default BookItem;
