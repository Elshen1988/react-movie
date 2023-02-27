

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [list, setList] = useState([])
  let [data, setData] = useState("avengers")
  useEffect(() => {
    fetch(` https://www.omdbapi.com/?s=${data}&apikey=278924d5`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.Search
          )
        setList(response.Search)});
  }, [data])
  console.log(list);

  return (
    <div className="App">
      <form className='form'>
        <label htmlFor='search'>search by film name : </label><br />
        <input onChange={(e) => setData(e.target.value)} id='search' type="text" />

      </form>
      <div className='flex'>

        {list?.map((item, index) => <div className='border' key={index}>
          <img alt='dsfsd' src={item.Poster} />
          <h3>{item.Title}</h3>
          <span>Production Year {item.Year}</span>
        </div>)
        }


      </div>
    </div>
  );
}

export default App;
