import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      contentful {
        informesCollection {
          items {
            titulo
            sys {
              id
            }
          }
        }
      }
    }
  `)

    console.log(data)

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h2>Informes</h2>
        <ul>
          {data.contentful.informesCollection.items.map(item => (
            <li key={item.sys.id}>{item.titulo}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage