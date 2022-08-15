import React from 'react';
import {Link} from 'react-router-dom';
import s from './Card.module.css'


 export default function Card({min, max, name, img, onClose, id, temp } ) {
  // acá va tu código
  return <div className ={s.div} >
    <Link to={`/ciudad/${id}`} >
    <h3 className ={s.cities}> {name} </h3>
    </Link>
    <button onClick = {onClose} className= {s.button} >X</button>
    
    
    <div>
      <h4>{temp} °С </h4>
      <p className ={s.temp} > MIN </p>
      <p>{min} °С</p>
    </div>
    <div>
      <p className ={s.temp}>MAX</p>
      <p> {max} °С</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img Not Found"/>
  </div>
}; 
