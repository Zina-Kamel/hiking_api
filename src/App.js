import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {

//  let long;
//  let lat;

//   //checking if geolocation is enabled
//   if(navigator.geolocation){
//    //getting longitude, latitude and id values from position to use then in api link
//   navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
//   long = position.coords.longitude;
//   lat = position.coords.latitude;

//   }

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200923231-086a9d74cb89edf74abd661a784b01f4${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App