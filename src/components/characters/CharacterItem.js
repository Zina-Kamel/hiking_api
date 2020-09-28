import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.imgMedium} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
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

export default CharacterItem
