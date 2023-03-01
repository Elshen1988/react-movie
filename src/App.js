

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [list, setList] = useState([])
  let [data, setData] = useState("avengers")
  let [favorite, setFavorite] = useState([])
  let [black, setBlack] = useState([])
   console.log(favorite); 
  useEffect(() => {
    fetch(` https://www.omdbapi.com/?s=${data}&apikey=278924d5`)
      .then((response) => response.json())
      .then((response) => {
      setList(response.Search)});
  }, [data])
  return (
    <div className="App">
      <div className='heder1'>
        <div className='heder'>
        <img alt='sdfsd' src='https://hdfilmhit.org/wp-content/uploads/2023/01/hdfilmhit190xlogo.png'/>
      <button className='hederBullon'>Home</button>
      <button className='hederBullon'>Movies</button>
      <button className='hederBullon'>TV Shows</button>
      
      <form className='form'>
        <label htmlFor='search'>search by film name : </label><br />
        <input onChange={(e) => setData(e.target.value)} id='search' type="text" />
      </form>
      </div>
      </div>
      
      
      <div className='flex'>

        {list?(list.map((item, index) => <div className='border' key={index}>
          <img alt='dsfsd' src={item.Poster} />
          <h3>{item.Title}</h3>
          <span>Production Year {item.Year}</span>
          
          <span> <button onClick={()=>setFavorite([...favorite,item.Title])}>Add to favorite list </button>
          <button onClick={()=>setBlack([...black,item.Title])}>Black list</button></span>
        </div>)):(<img className='oops' alt='dsgsdf' src='https://ghrce.raisoni.net/assets/images/gif/404.gif'/>)
      }
      </div>
      {
        list?<div className='mainTable'>
<div className='tableDiv'>
        <table>
          <thead>
            <tr>
              <th>List of favorite movies</th>
            </tr>
          </thead>
          <tbody>
            {favorite?.map((item,index)=><tr key={index}>
              <td>{item}</td>
            </tr>)}
          </tbody>
        </table>

      </div>
      <div className='secondTableDiv'>
      <table>
          <thead>
            <tr>
              <th>Black List</th>
            </tr>
          </thead>
          <tbody>
            {black?.map((item,index)=><tr key={index}>
              <td>{item}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>:null
      }
    
      
    </div>
    
  );
}

export default App;
