import React from 'react'

export default function CardList({ children }) {
  return (
    <>
      <h1>Stays in Finland</h1>
      <ul className='list_cards'>
          {children}
      </ul>
    </>
  )
}
