import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { bookService } from '../services/BookService';
import { useParams } from 'react-router-dom';
import {
  Link
} from "react-router-dom";


const BookDetails = ({data})=>{

  let { id } = useParams();
  const [Book, setBook] = useState([]);
  const [Author, setAuthor] = useState({});
  const getBookByIsbn = ()=>{
    bookService.getBookById(id).then((response)=>{
        setBook(response.data[0])
        setAuthor(response.data[0].author);
    });
  }

  useEffect(()=>{
    getBookByIsbn();
  }, []);

  return (
    <div>
         <Link to={`/books/edit/${Book.id}`}>EDIT</Link>
        <div className="p-2 border border-dark rounded">
            <h3>{Book.title}</h3>
            <p> {Book.summary} </p>
            <hr className="bg-primary" />
            <p className="m-0">{Book.language}</p>
            <p>{Author.name}</p>
        </div>
    </div>
  );
}

export default BookDetails;
