import React, { useState } from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState ('');
  // acá va tu código
  return (
    <div className={s.div} >
      <p>El clima en tu ciudad</p>
      <h1 className={s.h1} >Rafael Weather App</h1>
      <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity (''); //para que al pulsar agregar quede vacio
    }}>
      <input type="text" 
      placeholder='Ingrese su ciudad...' 
      className={s.borders} 
      //evenlistener xa que vaya guardando el input mientras se escribe
      onChange = {e => setCity (e.target.value) }
      value ={city} /> 
      
      <input type="submit" value="Agregar" />
    </form>
      
    </div>
  )
};