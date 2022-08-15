import React from 'react';
import s from './About.module.css'


export default function Ciudad({city}) {
if (!city) return <h4>"Esta ciudad no se encuentra en la lista"</h4>
    return (
        
        <div className={s.font}>
                <div >
                    <h2>{city.name}</h2>
                    <div >
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}