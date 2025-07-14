import axios from 'axios';

const BASE_URL = 'http://localhost:3500/books';

export const getBooks = async () => {
    try {
        const res = await axios.get(BASE_URL);
        return res;
    } catch (error) {
        console.error("Get books failed:", error.message);
    }
};

export const addBook = async (book) => {
    try {
        const res = await axios.post(BASE_URL, book);
        return res;
    } catch (error) {
        console.error("Add book failed:", error.message);
    }
};

export const updateBook = async (id, book) => {
    try {
        const res = await axios.put(`${BASE_URL}/${id}`, book);
        return res;
    } catch (error) {
        console.error("Update book failed:", error.message);
    }
};

export const deleteBook = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`);
        return res;
    } catch (error) {
        console.error("Delete book failed:", error.message);
    }
};
