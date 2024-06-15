import React, { useState } from 'react'
import {  Button, Form } from 'react-bootstrap'

export default function AddComment({elementId,setUpdateReviews,updateReviews}) {
  
  const[objComment,setObjComment]= useState({ comment: '', rate: 0, elementId: elementId})
  //Ogni evento di default passa l'oggetto evento
  //e.target si prende il nodo html che scatena l'evento
  // e.target.value si prende il valore dell'input
  let setCommentHandler = (e) =>{
    setObjComment({
      ...objComment, // con lo spread operator permette di prendere solo i valori contenuti nell'oggetto,in questo caso prende solo il valore di comment e lo sovrascrive
      comment: e.target.value
    })
  }
  
  let setRateHandler = (e) =>{
    setObjComment({
      ...objComment,
      rate: e.target.value
    })
  }
  
  
  let sendObjComment =() =>{
    // console.log(objComment)
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers : {
        "Content-Type":   "application/json",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhYTE5ZTBiM2IyNTAwMTUxYjU1YWMiLCJpYXQiOjE3MTgzMjA1NDksImV4cCI6MTcxOTUzMDE0OX0.TvGJ1Yt9t-BMhxBhSvaXkiU9p7n8OX9KDg5mCYuyGvg" },
        body: JSON.stringify(objComment), //converte in una stringa JSON e lo invia
      }).then((response) => response.json())
    .then((json) => {
      // console.log(json)
      // alert('Il commento è stato aggiunto')
      setUpdateReviews(!updateReviews) //visualizza il commento all'istante
      setObjComment({comment: '', rate: 0, elementId: elementId})
    })
    .catch(error => console.error(error))
  }
  
  
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control 
        type="email" 
        placeholder="Scrivi una recensione" 
        onChange={setCommentHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example" onChange={setRateHandler}>
          <option>Valuta il libro</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="outline-info" onClick={sendObjComment}>Conferma la recensione</Button>
      </Form.Group>
    </Form>
  )
}

