import React, { useState, useEffect } from 'react'
import './App.css';
import logoicon from './image/searchicon.png'
import location from './image/location.png'
import notdata from './image/not.png'
import sucess from './image/sucess.png'

function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Mumbai")

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dc8225f4adf1295e138e1227b0dfb389`;
      const response = await fetch(url);
      const res = await response.json();
      console.log(res.main)
      setCity(res.main);



    }
    fetchapi();

  }, [search])
  return (
    <div className='container'>
      <label>
        
      <input type="search"
        value={search}
    
        onChange={(e) => { setSearch(e.target.value) }}
        
      >
      </input>
      <img id='iconsearch' src={logoicon}></img>
      </label>

      {!city ? (<>
        <h3>City not found</h3>
        <img id='not' src={notdata}></img>
        <h4>First letter must be capital</h4>
        </>
      

      ) : (<div className='data'>
       <img id='location' src={location}></img> <h1>{search}</h1>
        <h2>{city.temp} °C</h2>
        <h4>Max: {city.temp_max} °C || Min: {city.temp_min} °C</h4>
        <img id='sucess' src={sucess}></img>
        
        </div>
        
        
      )}


    </div>
  );
}

export default App;
