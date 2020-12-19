import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
import styles from "./index.module.styl"

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'CV',
    url: '/cv',
  },
]

const Menu = ({ isOpen = false, setOpen }: { isOpen: boolean, setOpen: Function }) => {
  const location = useLocation();

  return (
    <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className="container">
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
                  className={location.pathname === link.url ? styles.active : ''}
                >{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Menu
