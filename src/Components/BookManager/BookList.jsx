import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <ul>
      {books.map(book => (
        <BookItem key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default BookList;
