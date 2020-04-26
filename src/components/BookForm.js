import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import { bookService } from '../services/BookService';
import { useParams, useHistory } from 'react-router-dom';

let formBook = {
    author: null,
    language: null,
    numberOfPages: null,
    publicationDate: null,
    publisher: null,
    summary: null,
    title: null
}

const BookForm = (props)=>{
    
    const {id} = useParams();
    const [Book, setBook] = useState(formBook);
    const [isValide, setIsValide] = useState(true);
    let history = useHistory();   

    useEffect(()=>{
        if(id){
            bookService.getBookById(id).then(response=>{
                formBook = response.data;
                setBook(formBook);
            })
        } 
    }, [])

    const getChangedValue = (e) => {
        formBook[e.target.name] = e.target.value;
    };

    const submitBookForm = (e)=>{
        e.preventDefault();
        let isNull = Object.values(formBook).includes(null);
        if(isNull){
            setIsValide(false);
        }else {
            setIsValide(true);
            if(props.mode === "edit"){
                bookService.editBook(formBook).then(response => {
                    history.push('/');
                })
            }else if(props.mode === "create") {
                bookService.createBook(formBook).then(rep => {
                    history.push('/');
                });
            }
        }
    }
    return (
        <Container className="m-5">
            {
                !isValide ?(
                    <Alert variant="danger">
                        One of the fields is empty !
                    </Alert>
                ) : ''
            }
            <Form onSubmit={submitBookForm}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Title" defaultValue={Book.title} onChange={getChangedValue} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" name="language" placeholder="Language" defaultValue={Book.language} onChange={getChangedValue} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Number of pages</Form.Label>
                    <Form.Control type="text" name="numberOfPages" placeholder="Number of pages" defaultValue={Book.numberOfPages} onChange={getChangedValue} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" name="publisher" placeholder="Publisher" defaultValue={Book.publisher} onChange={getChangedValue} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Publication date</Form.Label>
                    <Form.Control type="text" name="publicationDate" placeholder="Publication date" defaultValue={Book.publicationDate} onChange={getChangedValue} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" placeholder="Author" defaultValue={Book.author} onChange={getChangedValue} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control as="textarea" name="summary" rows="3" defaultValue={Book.summary}  onChange={getChangedValue} />
                </Form.Group>
                {
                    id ? (
                        <Button variant="primary" type="submit">Edit</Button>
                    ) : (<Button variant="primary" type="submit">Add</Button>)
                }
                
            </Form>
        </Container>
    );
}

export default BookForm;