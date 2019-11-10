import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const Source = ({ authors, link, date, formats, topics, title, summary }) => {
  console.log(authors)
  return (
    <div>
      <h1>{title}</h1>

    </div>
  )
}

Source.propTypes = {
  authors: PropTypes.array,
  link: PropTypes.string,
  date: PropTypes.string,
  formats: PropTypes.array,
  topics: PropTypes.array,
  title: PropTypes.string,
  summary: PropTypes.string,
}

export default Source

//           authors
//           link
//           date
//           formats
//           topics
//           title
//           summary
