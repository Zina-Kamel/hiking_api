import React from 'react'

const TrailItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.imgMedium} alt='' />
        </div>
        <div className='card-back'>
        <h1> <a href={item.url !== null ? item.url : "#"} target="_blank">{item.name}</a> </h1>
          <ul>
            <li>
              <strong>Condition Details:</strong> {item.conditionDetails}
            </li>
            <li>
              <strong>Difficulty:</strong> {item.difficulty}
            </li>
            <li>
              <strong>length:</strong> {item.length}
            </li>
            <li>
              <strong>location:</strong> {item.location}
            </li>
            <li>
              <strong>stars:</strong> {item.stars}
            </li>
            <li>
              <strong>summary:</strong> {item.summary}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TrailItem
