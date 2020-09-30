import React, { useState } from "react";

const LocationDropdown = ({ locationCallback }) => {
  const [loc, setLoc] = useState("");

  const onChange = (q) => {
    setLoc(q);
    locationCallback(q);
  };



  return (
    <select className= "dropDown"
      name="locations"
      id="locations"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="{lat}, {long}">Current location</option>
      <option value="40.71, -74.00">New York City</option>
      <option value="34.05, -118.24">Los Angeles</option>
      <option value="47.6062, -122.3321">Seattle</option>
      <option value="40.367474, -82.996216">Ohio</option>
      <option value="	32.318230, -86.902298">Alabama</option>
      <option value="	66.160507, -153.369141">Alaska</option>
      <option value="	32.318230, -86.902298">Alabama</option>
      <option value="	41.1529, 20.1606">Albania</option>
      <option value="	55.000000, -115.000000">Alberta</option>
      <option value="	-15.7500, -47.9500">Brazil</option>
      <option value="	26.820553, 30.802498">Egypt</option>
      <option value="	31.963158, 35.930359">Lebanon</option>
      
    </select>
  );
};

export default LocationDropdown;
