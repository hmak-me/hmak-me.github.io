import React from "react"
import SEO from "../components/seo"
import styles from "./index.module.styl"

const HomePage = () => (
  <main className={styles.homePage}>
    <SEO title="Home" />

    <div className="container">
      <aside>
        <div className={styles.info}>
          <div className={styles.hi}>Hi, I'm</div>
          <div className={styles.name}>Hossein</div>
          <div className={styles.jobTitle}>Web Developer</div>
        </div>

        <ul className={styles.socials}>
          <li className={styles.social}>
            <a target='_blank' href="https://github.com/hmak-me">GitHub</a>
          </li>
          <li className={styles.social}>
            <a target='_blank' href="https://linkedin.com/in/hmak-me">LinkedIn</a>
          </li>
          <li className={styles.social}>
            <a target='_blank' href="https://twitter.com/hmakme">Twitter</a>
          </li>
          <li className={styles.social}>
            <a target='_blank' href="https://instagram.com/hmak.me">Instagram</a>
          </li>
        </ul>
      </aside>
    </div>
  </main>
)

export default HomePage
