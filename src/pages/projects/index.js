import React from "react"
import Layout from "../../components/Layout"
import styles from '../../styles/projects.module.css'
const index = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h3>Projects & Websites I've created</h3>
      </div>
    </Layout>
  )
}

export default index
