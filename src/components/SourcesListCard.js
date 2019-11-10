import React from "react"
import { graphql } from "gatsby"
import TagList from "./TagList"

const Source = ({ authors, link, date, formats, tags, title, summary }) => {
  console.log(title)
  return (
    <div>
      <h1>{title}</h1>
      <TagList tags={tags}/>
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
      // <div className="max-w-xl mx-auto py-8">
      //   {sources.map(source => (
      //     <Source
      //       key={source.node.title}
      //       authors={source.node.authors}
      //       link={source.node.link}
      //       date={source.node.date}
      //       formats={source.node.formats}
      //       tags={source.node.tags}
      //       title={source.node.title}
      //       summary={source.node.summary}
      //     />
      //   ))}
      // </div>
