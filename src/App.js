import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx'
import s from "./App.module.css";
import Nav from './components/Nav.jsx';
import Ciudad from './components/Ciudad.jsx'

 function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
//'4ae2636d8dfbdc3044bede63951a019b'   henry
// '33ec475961eb6421cb43ebdf49f24505'   mia
   function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=99534fa71ff6b0475ea42cf12e12d399&units=metric`)
    .then(r => r.json())
    .then (city => {
        const ciudad = {
          min: Math.round(city.main.temp_min),
          max: Math.round(city.main.temp_max),
          img: city.weather[0].icon,
          id: city.id,
          wind: city.wind.speed,
          temp: city.main.temp,
          name: city.name,
          weather: city.weather[0].main,
          clouds: city.clouds.all,
          latitud: city.coord.lat,
          longitud: city.coord.lon
        };
      setCities(oldCities => [...oldCities, ciudad]);
} )
} 
function onFilter(ciudadId) {
  let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  if(ciudad.length > 0) {
      return ciudad[0];
  } else {
      return null;
  }
}

  return (
    <div className={s.app}>
     <Nav onSearch={onSearch}/>
     <Switch> 
      <Route exact path='/'> 
      <Cards 
          cities={cities} 
          onClose={onClose} 
      />
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route 
        exact path='/ciudad/:id'
        render={({match}) => <Ciudad
          city={onFilter (match.params.id)}
        />}
        >
      </Route>
      </Switch>
    </div>
  );  
  
}

export default App; 
