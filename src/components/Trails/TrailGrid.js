import React from 'react'
import TrailItem from './TrailItem'
import Spinner from '../ui/Spinner'


const TrailGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner/>
  ) : (
    <section className='cards'>
      {items.trails.map((item) => (
        <TrailItem key={item.id} item={item}></TrailItem>
      ))}
    </section>
  )
}

export default TrailGrid
