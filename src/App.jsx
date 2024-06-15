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
import { ThemeContext, AuthContext } from './modules/Context';

function App() {

    let [type,setType] = useState('fantasy');//prima visualizzazione in pagina
    const [search,setSearch] = useState("");// campo di ricerca
    const handleSearch = (e) => setSearch(e.target.value);//metodo di ricerca
    
    let [theme,setTheme] = useState('dark');// stato tema
    let [user,setUser] = useState('Fred Flinstone')//log utenti
  return (
<>
    {/* inietta i dati (stato theme) in APP(componenti correlati),value ={theme}(solo lettura) */}
    <ThemeContext.Provider value={[theme,setTheme]}> 
      <AuthContext.Provider value = {[user]}>
        < MyNav search={search} handleSearch={handleSearch} />
        <Container className='my-3'>      
            < Welcome/>
            <Button variant="link" onClick={() => setType('fantasy')}> Fantasy </Button>
            <Button variant="link" onClick={() => setType('history')}> History </Button>
            <Button variant="link" onClick={() => setType('horror')}> Horror </Button>
            <Button variant="link" onClick={() => setType('romance')}> Romance </Button>
            <Button variant="link" onClick={() => setType('scifi')}> Scifi </Button>
            {type === 'fantasy' && <AllTheBooks books={fantasy} search={search}/>}   {/* se type è uguale a fantasy allora visualizza su AllTheBooks Fantasy*/}
            {type === 'history' && <AllTheBooks books={history} search={search}/> }
            {type === 'horror' && <AllTheBooks books={horror}  search={search}/> }
            {type === 'romance' && <AllTheBooks books={romance} search={search}/> }
            {type === 'scifi' && <AllTheBooks books={scifi} search={search}/> }
        </Container>
        < MyFooter/>
      </AuthContext.Provider>
    </ThemeContext.Provider>  
</> 
  );
}
      

export default App
