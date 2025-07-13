import React from 'react';

const BookItem = ({ book, onEdit, onDelete }) => (
  <tr>
    <td>{book.title}</td>
    <td>{book.author}</td>
    <td>{book.genre}</td>
    <td>{book.copies}</td>
    <td>
      <button onClick={() => onEdit(book)}>Edit</button>{' '}
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </td>
  </tr>
);

export default BookItem;
