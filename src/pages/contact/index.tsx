import React from "react"
import SEO from "../../components/seo"
import styles from './index.module.styl'
import WorldMap from "../../assets/images/world"
import PhoneIcon from "../../assets/icons/phone"
import EmailIcon from "../../assets/icons/email"
import TwitterIcon from "../../assets/icons/twitter"
import GitHubIcon from "../../assets/icons/github"
import LinkedInIcon from "../../assets/icons/linkedin"
import InstagramIcon from "../../assets/icons/instagram"

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <SEO title="Contact" />
      <div className={styles.worldMap}>
        <WorldMap />
      </div>

      <div className="container">
          <section className={styles.contacts}>
            <h2 className={styles.title}>Contact Me</h2>

            <div className={styles.links}>
              <a  href={'tel:+989134625632'} className={styles.link}>
                <PhoneIcon/>
                <span>+98 913-462-5632</span>
              </a>
              <a href={'mailto:8bitsight@gmail.com'} className={styles.link}>
                <EmailIcon/>
                <span>8bitsight@gmail.com</span>
              </a>
            </div>
          </section>

          <section className={styles.socials}>
            <h2 className={styles.title}>Find Me On...</h2>

            <div className={styles.links}>
              <a target='_blank' href={'https://github.com/hmak-me'} className={styles.link}>
                <GitHubIcon/>
              </a>
              <a target='_blank' href={'https://linkedin.com/in/hmak-me'} className={styles.link}>
                <LinkedInIcon/>
              </a>
              <a target='_blank' href={'https://twitter.com/hmakme'} className={styles.link}>
                <TwitterIcon/>
              </a>
              <a target='_blank' href={'https://instagram.com/hmak.me'} className={styles.link}>
                <InstagramIcon/>
              </a>
            </div>
          </section>
      </div>
    </main>
  )
}

export default ContactPage
