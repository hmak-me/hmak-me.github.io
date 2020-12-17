import React from "react"
import Layout from "../../layout"
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


const CVPage = () => {
  return (
    <Layout className={styles.cvPage}>
      <SEO title="CV" />

      <div className={`container ${styles.cv}`}>
        <header className={styles.header}>
          <div className={styles.info}>
            <div className={styles.name}>
              <span className={styles.firstname}>Hossein</span>
              <span className={styles.lastname}>Maktoobian</span>
            </div>
            <div className={styles.jobTitle}>Full Stack Web Developer</div>
          </div>
        </header>


        <aside>
          <section className={styles.profile}>
            <header>
              <UserIcon />
              <h2>Profile</h2>
            </header>

            <p>Self taught programmer who is eager to learn more and more everyday. I got engaged with computers when I was 5, that was the
            beginning of the love story. Started my web development career in high school (2013) and kept it up until this moment. I've coded
            in various programming languages but recently chose JS as my speaking language.</p>
          </section>

          <section className={styles.education}>
            <header>
              <BookIcon />
              <h2>Education</h2>
            </header>

            <article>
              <h5>Sep 23, 2015 - Jan 20, 2018</h5>
              <h4>Mohajer Technical and Vocational College</h4>
              <h3>Associate of Software Engineering</h3>
            </article>

            <article>
              <h5>Sep 23, 2019 - Now</h5>
              <h4>Shamsipour Technical and Vocational College</h4>
              <h3>Bachelor of Software Engineering</h3>
            </article>
          </section>

          <section className={styles.awards}>
            <header>
              <TrophyIcon />
              <h2>Awards</h2>
            </header>

            <article>
              <h5>Jul 28, 2018</h5>
              <h4>18th Iran National Skills</h4>
              <h3>Gold Medal</h3>
            </article>

            <article>
              <h5>Aug 27, 2019</h5>
              <h4>45th WorldSkills Competition</h4>
              <h3>Medallion Of Excellence</h3>
            </article>
          </section>

          <section className={styles.contacts}>
            <header>
              <ContactIcon />
              <h2>Contacts</h2>
            </header>

            <ul className={styles.links}>
              <li className={styles.link}>
                <a href="tel:+989134625632">
                  <PhoneIcon/>
                  <span>+98 913-462-5632</span>
                </a>
              </li>
              <li className={styles.link}>
                <a href="mailto:8bitsight@gmail.com">
                  <EmailIcon/>
                  <span>8bitsight@gmail.com</span>
                </a>
              </li>
              <li className={styles.link}>
                <a href="https://hmak.me">
                  <WebsiteIcon/>
                  <span>hmak.me</span>
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.socials}>
            <header>
              <ShareIcon />
              <h2>Socials</h2>
            </header>

            <ul className={styles.links}>
              <li className={styles.link}>
                <a href='https://gihub.com/hmak-me'>
                  <GitHubIcon />
                  <span>@hmak-me</span>
                </a>
              </li>
              <li className={styles.link}>
                <a href='https://linkedin.com/in/hmak-me'>
                  <LinkedInIcon />
                  <span>@hmak-me</span>
                </a>
              </li>
              <li className={styles.link}>
                <a href='https://twitter.com/hmakme'>
                  <TwitterIcon />
                  <span>@hmakme</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>

        <main>
          <section className={styles.work}>
            <header>
              <BriefcaseIcon />
              <h2>Experience</h2>
            </header>

            <article>
              <h5>2014 - Now</h5>
              <h4>Isfahan, Iran</h4>
              <h3>Freelance Developer</h3>
              <p>I've been a freelance developer since 2014. Created an online shopping website
                using pure <b>PHP</b>, <b>HTML</b> and <b>CSS</b> as my first project. Then I registered in a freelancing
                website and took a couple of iOS mobile applications and created them with <b>Objective-C</b> and <b>Swift</b>.
                I've built on mobile and desktop games using <b>Unity Engine</b>. I also created full websites.</p>
            </article>

            <article>
              <h5>Feb 2016 - Mar 2016</h5>
              <h4>Ravis | Isfahan, Iran</h4>
              <h3>iOS Developer</h3>
              <p>Ravis is a flight ticket reseller which was providing a platform to sell
                charter flight tickets online. They had a fully functional website and I've joined their team to develop
                an iOS application with <b>Swift</b> to communicate with their APIs and provide the same functionality to
                their mobile users.</p>
            </article>

            <article>
              <h5>2016 - 2017</h5>
              <h4>Solar Sky | Iceland</h4>
              <h3>Front-end Developer</h3>
              <p>I was working with a team of <b>.NET</b> developers which was working remotely
                with Solar Sky which was a cleaning services company. We were working on their internal management panel to
                make managing their employees and clients easier. It was built on a <b>C#</b> and <b>.NET</b> base and I
                implemented their UI designs with <b>HTML5</b>, <b>SCSS</b> and <b>jQuery</b>.</p>
            </article>

            <article>
              <h5>Mar 2019 - May 2019</h5>
              <h4>Raadkish | Kish, Iran</h4>
              <h3>Front-end Developer</h3>
              <p>During my training for WorldSkills 2019 competition, I've joined <i>Raadkish</i>
                as a front-end developer to improve my skills there. They were working on startup fintech and tourist services.
                I've learned to code in <b>React</b> and <b>React Native</b> to develop the front-end parts of their websites
                and applications. Working along with <i>Hadi Mostafapour</i> took me to another level of web development. It was a great
                experience to see how things can be done better and faster, and learn best practices and new technologies
                in web development.</p>
            </article>

            <article>
              <h5>Dec 2019 - Jul 2020</h5>
              <h4>Kish Airport | Kish, Iran</h4>
              <h3>Full-stack Developer</h3>
              <p>Load and balance has some procedures to find the center of gravity of an
                airplane to use it for taking-off and landing. They were calculating the CG manually on papers, and my
                job was to created a website to do this automatically. It was created with <b>Laravel</b> and <b>React</b>.
                A challenging part of this project was its' data entry forms, since there was a ton of nested and related forms
                which was addressed by creating a form scaffolding structure, to create all those forms based on their database
                structure. I also had to work with the Airport DCS APIs to get flights and passengers data.</p>
            </article>

            <article>
              <h5>Jan 2020 - May 2020</h5>
              <h4>Hamresan | Tehran, Iran</h4>
              <h3>Full-stack Developer</h3>
              <p>I joined as the first developer to the <i>Hamresan</i> company as a full-stack
                developer. We started a PWA application to provide live flight and cruises schedule, and let users get their
                flight boarding pass or reserve and buy cruise tickets on their phones. This project was built with <b>Node.js</b>
                and <b>React</b> and used <b>GraphQL</b> and <b>Socket.io</b> for the communication between the client and the server.</p>
            </article>

            <article>
              <h5>May 2020 - Now</h5>
              <h4>Hamresan | Tehran, Iran</h4>
              <h3>Project Manager & Team Lead</h3>
              <p>After the company decided to recruit more developers, I've worked as the project
                manager and the team lead, learned to be a <b>Scrum</b> master and manage a project. We have created several
                web applications since then. A PWA Podcast app, a couple of medical websites and an online learning platform.
                Meanwhile, I was working as a Back-end developer and implemented a Node.js framework with <b>Typescript</b> which
                boosts bootstrapping our projects.</p>
            </article>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default CVPage
