import React from "react"
import { graphql } from "gatsby"

const Source = ({ authors, link, date, formats, topics, title, summary }) => {
  console.log(title)
  return (
    <div>
      <h1>{title}</h1>

    </div>
  )
}

export default Source

//           authors
//           link
//           date
//           formats
//           topics
//           title
//           summary
