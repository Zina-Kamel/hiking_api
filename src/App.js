import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import TrailGrid from './components/Trails/TrailGrid'
import Search from './components/ui/Search'
import './App.css'

  const App = () => {

    
  let long;
  let lat;

  function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }

    if (navigator.geolocation) {
    //getting longitude, latitude and id values from position to use then in api link
    navigator.geolocation.getCurrentPosition((position) => {
     console.log(position);
     long = toFixed(position.coords.longitude);
     lat = toFixed(position.coords.latitude);
     });
  }
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    React.useEffect(() => {
       const results = items.filter(item =>
         item.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);
    
    useEffect(() => {
      const fetchItems = async () => {
        setIsLoading(true)
        let hikingUrl = `https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&key=200923231-086a9d74cb89edf74abd661a784b01f4`
        const result = await axios(
                hikingUrl
        )

        console.log(result.data)

        setItems(result.data)
        setIsLoading(false)
      }

      fetchItems()
    }, [])



    return (
      <div className='container'>
        <Header />
        <input
        type="text"
        placeholder="Search"
        />
        <TrailGrid isLoading={isLoading} items={items} />
      </div>
    )
  }

export default App