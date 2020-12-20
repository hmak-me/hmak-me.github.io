import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import styles from "./index.module.styl"

const links = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    title: "Contact",
    url: "/contact"
  },
  {
    title: "CV",
    url: "/cv"
  }
]

const Menu = ({ isOpen = false, setOpen }: { isOpen: boolean, setOpen: Function }) => {
  const location = useLocation()

  return (
    <section className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={`link-${link.title}`}>
              <Link
                to={link.url}
                onClick={() => {
                  setTimeout(() => {
                    setOpen(false)
                  }, 200)
                }}
                className={location.pathname === link.url ? styles.active : ""}
              >{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

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
    </section>
  )
}

export default Menu
