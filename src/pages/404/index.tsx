import React from "react"
import SEO from "../../components/seo"
import Button from '../../components/button'
import { Link } from 'gatsby'
import styles from './index.module.styl'

const NotFoundPage = () => (
  <main className={styles.notFoundPage}>
    <SEO title="Not found" />

    <h2>Uh-Oh!</h2>
    <p>I'm sorry, but there is no such page in my website, looks like you took the wrong turn!</p>

    <Link to='/'>
      <Button>Take Me Home</Button>
    </Link>
  </main>
)

export default NotFoundPage
