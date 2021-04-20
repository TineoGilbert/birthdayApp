import birthday from '../src/components/data';
import React, { useState} from 'react';
import List from '../src/components/list';
import './index.css';


function App() {
  const [people, setPeople] = useState(birthday);
  return (
  <main>
    <section className='container'>
      <h3> {people.length} Cumpleaños </h3>
      <List people ={people}/>
      <button onClick={()=> setPeople([])}> 
        Limpiar
      </button>
    </section>
  </main>
  )
};

export default App;



    /*
    <div className="App">
      <header className="App-header">
        <section className='container'>
          <h3>0 Cumpleaños</h3>
        </section>
      </header>
    </div>
  );

  */
