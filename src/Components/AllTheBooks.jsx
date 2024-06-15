import React, { useState } from 'react'
import { Col, Form, Row,} from 'react-bootstrap';
import SingleBook from './SingleBook';
import SearchBook from './SearchBook';


export default function AllTheBooks(props) {
//  console.log(props.books);
    
const [search,setSearch] = useState("");
 
const handleSearch = (e) => setSearch(e.target.value);
 // si passa handleSearch come props di un componente poichè si attribuisce una variabile alla funzione ,
 // che prende il corpo della funzione e lo trasferisce tramite props
return (
  <>
    <Row> <SearchBook search={search} handleSearch = {handleSearch}/></Row>
    <Row>
        {props.books
        .filter(book => book.title.toLowerCase().includes(search))
        .slice(0,20)
        .map(book => <SingleBook key={book.asin} book={book}/> )}
    </Row>
  </>
)}
