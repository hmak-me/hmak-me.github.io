import React from "react"
import SEO from "../../components/seo"
import Button from '../../components/button'
import { Link } from 'gatsby'
import styles from './index.module.styl'

const NotFoundPage = () => (
  <main className={styles.notFoundPage}>
    <SEO title="Not found" />

    <h2>Are You Lost?</h2>

    <Link to='/'>
      <Button>Take Me Home</Button>
    </Link>
  </main>
)

export default NotFoundPage
