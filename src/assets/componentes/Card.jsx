import React from 'react'
import './Card.css'

const Card = ({ lang, img, fcolor, scolor }) => {
  return (
    <div 
      className='estiloCard' 
      style={{ 
        background: `linear-gradient(to left, ${fcolor}, ${scolor})` 
      }}
    > 
      <a href={`https://www.google.com/search?q=${lang}`} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={`${lang} logo`} />
      </a>
      <h1>{lang}</h1>
    </div>
  )
}

export default Card
