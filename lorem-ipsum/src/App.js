import React, {useState} from 'react';
import data from './data';
function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);
    if(count<=0){amount=1;}
    if(count>8){amount=8;}
    setText(data.slice(0,amount));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="loremform" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
          <input type="number" name="amount" id="amount" value={count}
           onChange={(e)=>setCount(e.target.value)}></input>
           <button type="submit" className="btn">GENERATE</button>
        </label>
      </form>
        <article className="lorem-text">
          {text.map((item,index)=>{
            return <p key={index}>{item}</p>
          })}
        </article>
    </section>
  );
}

export default App;
