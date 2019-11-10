import React from 'react'
import FilterButton from './FilterButton'
const TagList = ({ tags }) => {
  const buttons = tags.map((tag, id) => {
    return <FilterButton key={id} text={tag} />
  })
  return buttons
}

export default TagList
