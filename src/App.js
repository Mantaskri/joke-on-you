import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [jk, setJokes] = useState([]);

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => setJokes(res.data.jokes));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes on You</h1>
        <ul>
          {
            jk.map(j => j.joke ? <li className='jokes' key={j.id}>{j.joke}</li> : <li className='noJoke' key={j.id}>{j.setup} {j.delivery}</li>)
          }
          </ul>
        </header>
      </div>
    );
  };

export default App;
