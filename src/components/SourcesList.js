import React from 'react'
import SourcesListCard from './SourcesListCard'

const SourcesList = ({ sourceEdges }) => {
  return sourceEdges.map(({ node }, id) => {
    return <SourcesListCard key={id} {...node} />
  })
}

export default SourcesList
