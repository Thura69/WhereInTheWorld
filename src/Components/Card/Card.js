import './card.css'

import React from 'react'

function Card({flag,name,population,region,capital="No Capital"}) {


 
 




  return (
    <div className='card'>
    <div className='img__container'>
    <img src={flag}></img>
    </div>
    <div className='card__content'>
    <h3 className='card__title'>{name}</h3>
    <div className='card__content__detail'>
    <p><span>Population:</span> {population}</p>
    <p><span>Region:</span> {region}</p>
    <p><span>Capital:</span> {capital}</p>

    </div>
    </div>
    </div>
  )
}

export default Card