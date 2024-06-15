import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import SearchBook from './SearchBook';
import { AuthContext, ThemeContext } from '../modules/Context'



export default function MyNav({search,handleSearch}) {
  
  let [updateContext,setUpdateContext] = useContext(ThemeContext);//si prendono i dati dal Context in App
  let [userContext,setUserContext] = useContext(AuthContext);

  return (
    <>
      <Navbar bg={updateContext} data-bs-theme={updateContext} >
        <Container>
          <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Browse">Browse</Nav.Link>
          </Nav>
          <SearchBook search={search} handleSearch={handleSearch} />
          <Navbar.Text className='me-3'>
            Signed in as: <a href="#login">{userContext}</a>
          </Navbar.Text>
          <Button variant="light" onClick={() =>{
            updateContext === 'light' ? setUpdateContext('dark') : setUpdateContext('light')}}>Cambio tema
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
