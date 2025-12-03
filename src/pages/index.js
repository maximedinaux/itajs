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
      <h2>Liste des pages du site</h2>
      <h3>async</h3>
      <ul>
        {data.a.nodes.map((item, index) => {
          return <li kye={index}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Index
