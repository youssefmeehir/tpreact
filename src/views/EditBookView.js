
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { bookService } from '../services/BookService';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

let formBook = {
  author: null,
  language: null,
  numberOfPages: null,
  publicationDate: null,
  publisher: null,
  summary: null,
  title: null
}

const EditBookView = (props) => {

    let { id } = useParams();
    const [Book, setBook] = useState(formBook);
    let history = useHistory();   
    
  
    useEffect(()=>{
      if(id){
          bookService.getBookById(id).then(response=>{
              formBook = response.data[0];
              setBook(formBook);
              console.log(formBook)
          })
      } 
  }, [])



  const handleChangeForm = (event) => {
    let newBook = formBook ;
    newBook[event.target.name] = event.target.value;
    setBook(newBook);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(JSON.stringify(Book));
    Book.id = formBook.id;
    bookService.editBook(Book)
      .then(respons => {
        history.push('/');
      })
      .catch(error => {console.error(error)})
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input name="title" type="text" className="form-control" defaultValue={Book.title} onChange={handleChangeForm}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Language</label>
          <input name="language" type="text" className="form-control"  defaultValue={Book.language} onChange={handleChangeForm} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Number of pages</label>
          <input name="numberOfPages" type="text" className="form-control" defaultValue={Book.numberOfPages} onChange={handleChangeForm} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Publisher</label>
          <input name="publisher" type="text" className="form-control" defaultValue={Book.publisher} onChange={handleChangeForm}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Publication date</label>
          <input name="publicationDate" type="text" className="form-control" defaultValue={Book.publicationDate} onChange={handleChangeForm}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Author</label>
          <input name="author" type="text" className="form-control" defaultValue={Book.author} onChange={handleChangeForm}/>
        </div>
        
       
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Summary</label>
          <textarea name="summary" className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={Book.summary} onChange={handleChangeForm}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Container>
  )
}

export default EditBookView;