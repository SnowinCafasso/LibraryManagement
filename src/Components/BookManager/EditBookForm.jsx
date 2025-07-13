import React, { useState } from 'react';

const EditBookForm = ({ book, onUpdate }) => {
  const [formData, setFormData] = useState(book);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { ...formData, copies: parseInt(formData.copies) };
    onUpdate(updatedBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} required />
      <input name="author" value={formData.author} onChange={handleChange} required />
      <input name="genre" value={formData.genre} onChange={handleChange} required />
      <input name="copies" type="number" value={formData.copies} onChange={handleChange} required />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;
