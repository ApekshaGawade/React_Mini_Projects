import logo from './logo.svg';
import './App.css';
import List from './List';
import data from './data';
import { useState } from 'react';

function App() {
  const [people,setPeople] = useState(data);
  return (
    <div className="container">
    <main>
      <section className="card">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button className="clrbtn" 
        onClick={()=>setPeople([])}>
          Clear All</button>
      </section>
    </main>
    </div>
  );
}

export default App;