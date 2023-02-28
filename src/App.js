

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [list, setList] = useState([])
  let [data, setData] = useState("avengers")
  let [favorite, setFavorite] = useState([])
   console.log(favorite); 
  useEffect(() => {
    fetch(` https://www.omdbapi.com/?s=${data}&apikey=278924d5`)
      .then((response) => response.json())
      .then((response) => {
      setList(response.Search)});
  }, [data])
  return (
    <div className="App">
      <form className='form'>
        <label htmlFor='search'>search by film name : </label><br />
        <input onChange={(e) => setData(e.target.value)} id='search' type="text" />

      </form>
      <div className='flex'>

        {list?(list.map((item, index) => <div className='border' key={index}>
          <img alt='dsfsd' src={item.Poster} />
          <h3>{item.Title}</h3>
          <span>Production Year {item.Year}</span>
          <button onClick={()=>setFavorite([...favorite,item.Title])}>Add to list</button>
        </div>)):(<img className='oops' alt='dsgsdf' src='https://ghrce.raisoni.net/assets/images/gif/404.gif'/>)
      }
      </div>
      <div className='tableDiv'>
        <table>
          <thead>
            <tr>
              <th>List of favorite movie</th>
            </tr>
          </thead>
          <tbody>
            {favorite?.map((item,index)=><tr key={index}>
              <td>{item}</td>
            </tr>)}
          </tbody>
        </table>

      </div>
    </div>
    
  );
}

export default App;
