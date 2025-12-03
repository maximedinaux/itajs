import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//component
import Layout from '../components/Layout'
//data
const getData = graphql`
  {
    a: allWpPage(sort: { menuOrder: ASC }) {
      nodes {
        title
        slug
      }
    }
  }
`

const Index = () => {
  const data = useStaticQuery(getData)
  return (
    <Layout>
      <h1>Home</h1>
      <h2>Liste des pages du site</h2>
      <h3>async compilation en live</h3>
      <ul>
        {data.a.nodes.map((item, index) => {
          return <li kye={index}>{item.title}</li>
        })}
      </ul>
    </Layout>
  )
}

export default Index
