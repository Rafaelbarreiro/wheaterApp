import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css';

 export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
  return (
    <div className={s.cards} > {
      cities.map ( c => <Card
        temp={c.temp}
        key={c.id}
        max={c.max}
        min={c.min}
        name={c.name}
        img={c.img}
        onClose={()=> onClose(c.id) }
        id={c.id}
      /> )}
    </div>
  );
} else {
  return (
    <div className={s.cards} >Sin ciudades</div>
  )
}
} ; 
