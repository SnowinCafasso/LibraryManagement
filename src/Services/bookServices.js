// services/bookService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3500/books';

export const getBooks = () => axios.get(BASE_URL);

export const addBook = async (book) => {
  try {
    const res = await axios.post(BASE_URL, book);
    return res; // ✅ THIS LINE IS CRUCIAL
  } catch (error) {
    console.error("Add book failed:", error.message);
    throw error; // ✅ So it can be caught in component
  }
};

export const updateBook = (id, book) => axios.put(`${BASE_URL}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${BASE_URL}/${id}`);
