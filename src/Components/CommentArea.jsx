import React, { useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';
import { Alert, Spinner } from 'react-bootstrap';

const urlReviews= 'https://striveschool-api.herokuapp.com/api/books/';

export default function CommentArea({asin}) {
  const[reviews,setReviews] = useState([]);
  const[loading,setLoading] = useState(false);//spinner
  const[error,setError] = useState(false);
  const[updateReviews,setUpdateReviews] = useState(false); // aggiornamento pagina /elevazione di stato
useEffect(() => {
    setLoading(true);
    fetch(urlReviews+ asin + '/comments', {
      headers : {
      "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhYTE5ZTBiM2IyNTAwMTUxYjU1YWMiLCJpYXQiOjE3MTgzMjA1NDksImV4cCI6MTcxOTUzMDE0OX0.TvGJ1Yt9t-BMhxBhSvaXkiU9p7n8OX9KDg5mCYuyGvg" }
  })
    .then((response) => response.json() )
    .then((json) => {
      setReviews(json);// fare console.log di prova
      setLoading(false);
    })
    .catch((error) => {
        // console.log(error)
      setError(true)
      setLoading(false)
      })
  }, [updateReviews])

  return (
    <div>
    {loading && <div className='text-center mt-2'><Spinner className='my-4' animation="grow" /></div>}
    {error && <div className='text-center mt-2'>
                <Alert key={"info"} variant={"info"}> Problemi nel caricamento</Alert></div>}
    <AddComment elementId={asin} setUpdateReviews={setUpdateReviews} updateReviews={updateReviews}/>
    <CommentList comments={reviews} setUpdateReviews={setUpdateReviews} updateReviews={updateReviews}/>
    </div>
  )
}
