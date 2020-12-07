import React from "react"
import Layout from "../layout"
import SEO from "../components/seo"
import styles from "./index.module.styl"
import Button from "../components/button"
import { Link } from "gatsby"

const HomePage = () => (
  <Layout className={styles.homePage}>
    <SEO title="Home" />

    <div className="container">
      <aside>
        <div className={styles.info}>
          <div className={styles.hi}>Hi, I'm</div>
          <div className={styles.name}>Hossein</div>
          <div className={styles.jobTitle}>Web Developer</div>

          <Link to='/cv'>
            <Button>Download CV</Button>
          </Link>
        </div>

        <ul className={styles.socials}>
          <li className={styles.social}><a href="https://github.com/hmak-me">GitHub</a></li>
          <li className={styles.social}><a href="https://instagram.com/hmak.me">Instagram</a></li>
          <li className={styles.social}><a href="https://twitter.com/hmakme">Twitter</a></li>
          <li className={styles.social}><a href="https://linkedin.com/in/hmak-me/">LinkedIn</a></li>
        </ul>
      </aside>
    </div>
  </Layout>
)

export default HomePage
