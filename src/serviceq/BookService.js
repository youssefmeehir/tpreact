import axios from "axios";

class BookService {
  findBooks() {
    return axios.get('/books');
  }

  findBooksByTitle(title) {
    return axios.get(`/books?title=${title}`);
  }
}

export const bookService = new BookService();