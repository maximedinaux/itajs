import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
  {
    a: allWpPage {
      nodes {
        title
      }
    }
  }
`

const Index = () => {
  const data = useStaticQuery(getData)
  return (
    <div>
      <h1>Home</h1>
      <h2>
        Test <strong>v7</strong> request
      </h2>
      <ul>
        {data.a.nodes.map((item, index) => {
          return <li kye={index}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Index
