import React from "react"
import Layout from "../components/Layout"

const error_404 = () => {
  return (
    <Layout>
      <div>
        <h2> 404 Not found</h2>
        <p>Sorry, that page doesn't exist</p>
      </div>
    </Layout>
  )
}

export default error_404
