import React from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'

export default function SingleComment({comment,setUpdateReviews,updateReviews}) {
  
  const removeComment = (comment) =>{
    // alert('Rimuovi il commento');
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + comment._id, {
      method: 'DELETE',
      headers : {
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhYTE5ZTBiM2IyNTAwMTUxYjU1YWMiLCJpYXQiOjE3MTgzMjA1NDksImV4cCI6MTcxOTUzMDE0OX0.TvGJ1Yt9t-BMhxBhSvaXkiU9p7n8OX9KDg5mCYuyGvg" }
    }).then((response) => response.json())
    .then((json) => {
      // console.log(json)
      // alert('Il commento è stato eliminato')
     setUpdateReviews(!updateReviews); //visualizza il commento all'istante
    })
    .catch(error => console.error(error))
  }
  
  return (
    <ListGroupItem>
    {comment.comment}
    <Button variant="danger" className='float-end'onClick={() =>removeComment(comment)}>x</Button>
    </ListGroupItem>

  )
}
