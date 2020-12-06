import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <div className="blog-post">
        <h1>{post.meta.title}</h1>
        <h2>{post.meta.date}</h2>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            body
            meta: frontmatter {
                date(formatString: "MMM DD, YYYY")
                slug
                title
            }
        }
    }
`

export default BlogPostTemplate
