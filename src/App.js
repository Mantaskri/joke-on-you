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
          <h1>API</h1>
          <ul>
              {
                  jk.map(j => <li key={j.jokes}>{j.joke} <span style={{color:'white'}}></span></li>)
              }
          </ul>
      </header>
  </div>
);
}

export default App;
