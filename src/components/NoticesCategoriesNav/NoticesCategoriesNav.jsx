import React from 'react'

import NoticeCategoryItem from "components/NoticesCategoryItem/NoticesCategoryItem"

const NoticesCategoriesNav = (userPets) => {
  const filterPets = userPets.filter(pets => pets.condition === condition)
  return (
    <ul key={filterPets.id}>
{filterPets.map(({id, favorite, avatar, title, location, age, condition}) => (
  <NoticeCategoryItem
  key={id}
  avatar = {avatar}
  favorite = {favorite}
  title = {title}
  breed = {breed}
  location = {location}
  age = {age}
  condition = {condition}
  />
))}
    </ul>
  )
}

export default NoticesCategoriesNav