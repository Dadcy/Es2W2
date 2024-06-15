import React, { useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import CommentArea from './CommentArea';



export default function SingleBook( {book} ) {
  
  const [selected, setSelected] = useState(false);
  
  return (
    // con !seleceted si nega il valore di selected in modo che si crei un toggle che tolga e metta il bordo al click //
    <Col>
      <Card style={{ width: "18rem", border: selected ? "2px solid red" :"none", cursor:"pointer"}} onClick={() => setSelected(!selected)}>  
        <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body> 
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </Col>
  );
}
