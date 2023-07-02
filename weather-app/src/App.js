import React, { useState } from 'react';
import './App.css';
import "./background.jpg";

const api = {
  key: 'c7616da4b68205c2f3ae73df2c31d177',//'7549b3ff11a7b2f3cd25b56d21c83c6a',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {

  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const d = new Date();

  const fetchWeather = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
        .then(res => res.json()) 
        .then(result => {        
          setWeather(result);
          setLocation('');
        });
    }
  }

  return (
    <div className={'app'}>
      <main>
        <div className='search'>
          <input
            type='text'
            className='search-bar'
            placeholder='Поиск...'
            onChange={e => setLocation(e.target.value)}
            value={location}
            onKeyPress={fetchWeather}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
        <div>
          <div className='location'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date' > {
               (d.getDate()<10 ? '0' + d.getDate() : d.getDate()) + 
               '.' + (d.getMonth()<10 ? '0' +  (d.getMonth() + 1):(d.getMonth() + 1)) +
               '.'+ d.getFullYear()
               }
            </div>
          </div>
          <div className='weather'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°c
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;

