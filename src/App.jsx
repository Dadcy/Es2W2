import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';

import { Container, Button} from 'react-bootstrap';

import AllTheBooks from './Components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';
import { useState } from 'react';


function App() {

   let [type,setType] = useState('fantasy');
  
  return (
   <>
    < MyNav/>
     <Container className='my-3'>      
    < Welcome/>
    <Button variant="link" onClick={() => setType('fantasy')}> Fantasy </Button>
    <Button variant="link" onClick={() => setType('history')}> History </Button>
    <Button variant="link" onClick={() => setType('horror')}> Horror </Button>
    <Button variant="link" onClick={() => setType('romance')}> Romance </Button>
    <Button variant="link" onClick={() => setType('scifi')}> Scifi </Button>
    {type === 'fantasy' && <AllTheBooks books={fantasy} />}   {/* se type è uguale a fantasy allora visualizza su AllTheBooks Fantasy*/}
    {type === 'history' && <AllTheBooks books={history} /> }
    {type === 'horror' && <AllTheBooks books={horror}  /> }
    {type === 'romance' && <AllTheBooks books={romance} /> }
    {type === 'scifi' && <AllTheBooks books={scifi} /> }
     
     
     {/*<h2 style={{color:"pink"}}>FANTASY</h2>
     <AllTheBooks books= {fantasy}/>
     <h2 style={{color:"red"}}>HISTORY</h2>
     <AllTheBooks books= {history}/>
     <h2 style={{color:"green"}}>HORROR</h2>
     <AllTheBooks books= {horror}/>
     <h2 style={{color:"yellow"}}>ROMANCE</h2>
     <AllTheBooks books= {romance}/>
     <h2 style={{color:"brown"}}>SCIFI</h2>
     <AllTheBooks books= {scifi}/> */}
     
     </Container>
    < MyFooter/>
   </> 
  );
}

export default App
