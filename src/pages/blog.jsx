import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout';
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           excerpt
  //           id
  //           fields {
  //               slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort :{
        fields: publishedDate,
        order:DESC
      }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY - HH:mm")
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>

      <ol className={blogStyles.posts}>
        {data?.allContentfulBlogPost?.edges?.map((post, key) => {
          return <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`} key={key}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;