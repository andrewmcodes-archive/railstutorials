import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const Source = ({ authors, link, date, formats, topics, title, summary }) => {
  console.log(authors)
  return (

    <div className="max-w-2xl m-5 border-solid border-2 p-2 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-2">
        <h1 className="font-bold text-xl mb-2"><a href={link}>{title}</a></h1>
        <h2 className="text-lg">{authors[0]} ・ {date} </h2>
        <p className="text-gray-700 text-base">
          {summary}
        </p>
      </div>
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
