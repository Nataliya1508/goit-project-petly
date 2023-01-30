import React from 'react'
import {Text} from '@chakra-ui/react'

const NoticesCategoryItem = (
  {
  id,
  avatar,
  favorite,
  title,
  breed,
  location,
  age,
  condition,
  onDeletePets
  }) => {
  return (
    <li>
      <div>
        <img src={avatar} alt="Pets" width="100" />
        <p>{condition}</p>
        <Text bg={ favorite ? "res.200" : "green.300"}></Text>
      </div>
    <h3>{title}</h3>
      <p>Breed:{breed}</p> 
      <p>Location:{location}</p>
      <p>Age:{age}</p> 
    <button>Learn more</button>
    {favorite? <button
      type='submit'
      onClick={onDeletePets(id)}>
      Delete
    </button> : null}
    </li>
  )
}

export default NoticesCategoryItem