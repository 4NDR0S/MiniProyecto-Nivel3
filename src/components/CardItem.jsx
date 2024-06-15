import React from 'react'

export default function CardItem({apartment:{type, beds, rating, title, img, superhost}}) {
  return (
    <div className='card'>
        <picture>
            <img src={img} alt="" />
        </picture>
        <div className='detalles'>
          {superhost !== false && <h3 className='superhost'>SUPER HOST</h3>}
          <h4>
              {type} 
              {beds !== null && <span>. {beds} beds</span>}
          </h4>
          <h4 className='rating'><span className='estrellita'>★</span>{rating}</h4>
        </div>
        <h3 className='titulo_card'>{title}</h3>
    </div>
  )
}
