import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [status,setStatus] = useState("");

    const Submit = (e)=> {
      e.preventDefault();
      if(!title || !status){
        alert("Title or Status is Empty");
      }else{
      props.addtoLists(title,status);
      setStatus("");
      setTitle("");
    }
    }
  return (
    <>
    <div className='container mt-20'>
    <h4>Enter a new Todo Item</h4>
    <Form className='my-5' onSubmit={Submit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Todo Title</Form.Label>
      <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Heading" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Enter status here</Form.Label>
      <Form.Control as="textarea" value={status}  onChange={(e) => setStatus(e.target.value)}  rows={1} />
    </Form.Group>
    <button className="btn btn-success" type='submit'>Submit</button>
  </Form>
    </div>
   
    </>
    
);
  
}
