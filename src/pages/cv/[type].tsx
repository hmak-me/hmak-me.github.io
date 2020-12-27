import React from "react"
import SEO from "../../components/seo"
import GitHubIcon from "../../assets/icons/github"
import TwitterIcon from "../../assets/icons/twitter"
import LinkedInIcon from "../../assets/icons/linkedin"
import BriefcaseIcon from "../../assets/icons/briefcase"
import PhoneIcon from "../../assets/icons/phone"
import EmailIcon from "../../assets/icons/email"
import WebsiteIcon from "../../assets/icons/website"
import TrophyIcon from "../../assets/icons/trophy"
import BookIcon from "../../assets/icons/book"
import UserIcon from "../../assets/icons/user"
import ShareIcon from "../../assets/icons/share"
import ContactIcon from "../../assets/icons/contact"
import styles from "./index.module.styl"

import full from './data/full-stack.json'
import front from './data/front-end.json'
import back from './data/back-end.json'

function formatPhoneNumber(phone: string): string {
  const match = phone.match(/(\+|00)?(\d{1,3})(\d{3})(\d{3})(\d{4})/)

  return `+${match[2]} ${match[3]}-${match[4]}-${match[5]}`
}


const CVPage = ({ type }) => {
  const data = { 'full-stack': full, 'back-end': back, 'front-end': front }[type] ?? full

  return (
    <main className={styles.cvPage}>
      <SEO title="CV" />

      <div className={`container ${styles.cv}`}>
        <header className={styles.header}>
          <div className={styles.info}>
            <div className={styles.name}>
              <span className={styles.firstname}>{data.firstName}</span>
              <span className={styles.lastname}>{data.lastName}</span>
            </div>
            <div className={styles.jobTitle}>{data.jobTitle}</div>
          </div>
        </header>


        <aside>
          {data.profile && (
            <section className={styles.profile}>
              <header>
                <UserIcon />
                <h2>Profile</h2>
              </header>

              <p>{data.profile}</p>
            </section>
          )}

          {data.educations?.length > 0 && (
            <section className={styles.education}>
              <header>
                <BookIcon />
                <h2>Education</h2>
              </header>

              {data.educations.map((education, index) => (
                <article key={index}>
                  <h5>{education.date}</h5>
                  <h4>{education.university}</h4>
                  <h3>{education.degree}</h3>
                </article>
              ))}
            </section>
          )}

          {data.awards?.length > 0 && (
            <section className={styles.awards}>
              <header>
                <TrophyIcon />
                <h2>Awards</h2>
              </header>

              {data.awards.map((award, index) => (
                <article key={index}>
                  <h5>{award.date}</h5>
                  <h4>{award.competition}</h4>
                  <h3>{award.award}</h3>
                </article>
              ))}
            </section>
          )}

          {data.contacts && (
            <section className={styles.contacts}>
              <header>
                <ContactIcon />
                <h2>Contacts</h2>
              </header>

              <ul className={styles.links}>
                {data.contacts.phone && (
                  <li className={styles.link}>
                    <a href={`tel:${data.contacts.phone}`}>
                      <PhoneIcon/>
                      <span>{formatPhoneNumber(data.contacts.phone)}</span>
                    </a>
                  </li>
                )}

                {data.contacts.email && (
                  <li className={styles.link}>
                    <a href={`mailto:${data.contacts.email}`}>
                      <EmailIcon/>
                      <span>{data.contacts.email}</span>
                    </a>
                  </li>
                )}

                {data.contacts.website && (
                  <li className={styles.link}>
                    <a target='_blank' rel='noopener' href={data.contacts.website}>
                      <WebsiteIcon/>
                      <span>{data.contacts.website.replace(/^https?:\/\//, '')}</span>
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}

          {data.socials && (
            <section className={styles.socials}>
              <header>
                <ShareIcon />
                <h2>Socials</h2>
              </header>

              <ul className={styles.links}>
                {data.socials.github && (
                  <li className={styles.link}>
                    <a target='_blank' rel='noopener' href={`https://gihub.com/${data.socials.github}`}>
                      <GitHubIcon />
                      <span>@{data.socials.github}</span>
                    </a>
                  </li>
                )}

                {data.socials.linkedin && (
                  <li className={styles.link}>
                    <a target='_blank' rel='noopener' href={`https://linkedin.com/in/${data.socials.linkedin}`}>
                      <LinkedInIcon />
                      <span>@{data.socials.linkedin}</span>
                    </a>
                  </li>
                )}

                {data.socials.twitter && (
                  <li className={styles.link}>
                    <a target='_blank' rel='noopener' href={`https://twitter.com/${data.socials.twitter}`}>
                      <TwitterIcon />
                      <span>@{data.socials.twitter}</span>
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}
        </aside>

        <main>
          {data.experiences?.length > 0 && (
            <section className={styles.work}>
              <header>
                <BriefcaseIcon />
                <h2>Experience</h2>
              </header>

              {data.experiences.map((xp, index) => (
                <article key={index}>
                  {xp.date && <h5>{xp.date}</h5>}
                  {xp.location && <h4>{xp.location}</h4>}
                  {xp.jobTitle && <h3>{xp.jobTitle}</h3>}
                  {/*{xp.description && <p>{xp.description}</p>}*/}
                  {xp.highlights?.length > 0 && (
                    <ul>
                      {xp.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </section>
          )}
        </main>
      </div>
    </main>
  )
}

export default CVPage
