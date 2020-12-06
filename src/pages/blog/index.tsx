import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../layout"
import SEO from "../../components/seo"

const BlogPage = ({ data: { allMdx: { edges } } }) => (
  <Layout>
    <SEO title="Blog" />
      {edges.map(({ node }) => (
        <Link to={`${node.meta.slug}`} key={node.id}>{node.meta.title}</Link>
      ))}
  </Layout>
)

export const pageQuery = graphql`
    query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    meta: frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                }
            }
        }
    }
`

export default BlogPage
