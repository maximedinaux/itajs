const path = require('path')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetPages {
      page: allWpPage(sort: { menuOrder: ASC }) {
        nodes {
          title
          slug
        }
      }
    }
  `)

  //product
  result.data.page.nodes.forEach((page) => {
    if (page.title !== 'maxime dinaux') {
      createPage({
        path: `/${page.slug}/`,
        component: path.resolve(`src/templates/TemplatePage.js`),
        context: {
          title: page.title,
          id: page.id,
          type: 'page',
        },
      })
    }
  })
}
