import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>loading..</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <h1>{item.trails.name}</h1>
      ))}
    </section>
  )
}

export default CharacterGrid
