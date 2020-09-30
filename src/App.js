import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import TrailGrid from "./components/Trails/TrailGrid";
import Search from "./components/ui/Search";
import LocationDropdown from "./components/ui/LocationDropdown";
import "./App.css";

const App = () => {
  let long;
  let lat;

  function toFixed(num, fixed) {
    var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
    return num.toString().match(re)[0];
  }

  if (navigator.geolocation) {
    //getting longitude, latitude and id values from position to use then in api link
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = toFixed(position.coords.longitude, 2);
      lat = toFixed(position.coords.latitude, 2);
    });
  }

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [savedItems, setSavedItems] = useState([]);

  const filterItems = (text) => {
    if (text === "") {
      setItems(savedItems);
    } else {
      const results = {
        trails: savedItems.trails.filter(
          (item) =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.difficulty.toLowerCase().includes(text.toLowerCase())
        ),
      };
      setItems(results);
    }
  };

  const updateLocation = (loc) => {
    const latitude = loc.split(",")[0].trim();
    const longitude = loc.split(",")[1].trim();
    console.log(latitude);
    console.log(longitude);
    fetchItems(latitude, longitude);
    //TODO: create state variables for latitude and longitude, and call the hiking API again inside this function
  };

  const fetchItems = async (lat = "40.0274", long = "-105.2519") => {
    setIsLoading(true);
    let url = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=200&key=200923231-086a9d74cb89edf74abd661a784b01f4`;
    let hikingUrl = `https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&key=200923231-086a9d74cb89edf74abd661a784b01f4`;
    const result = await axios(url);

    console.log(result.data);

    setItems(result.data);
    setSavedItems(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <Search filterItemsFunction={filterItems} />
      <LocationDropdown style={{backgroundColor: "red"}} locationCallback={updateLocation} />
      <TrailGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
