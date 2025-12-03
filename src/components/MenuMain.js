import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
//data
const getData = graphql`
  {
    a: allWpPage(
      sort: { menuOrder: ASC }
      filter: { title: { ne: "maxime dinaux" } }
    ) {
      nodes {
        title
        slug
      }
    }
  }
`
const MenuMain = () => {
  const data = useStaticQuery(getData)

  return (
    <div class='menu_main'>
      <ul class='menu'>
        <li>
          <Link to={`/`}>accueil</Link>
        </li>
        {data.a.nodes.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/${item.slug}`}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuMain
