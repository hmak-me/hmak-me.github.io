import React from "react"
import Layout from "../../layout"
import SEO from "../../components/seo"
import styles from "./index.module.styl"
import GitHubIcon from "../../assets/icons/github"
import TwitterIcon from "../../assets/icons/twitter"
import LinkedInIcon from "../../assets/icons/linkedin"
import BookIcon from "../../assets/icons/book"
import BriefcaseIcon from "../../assets/icons/briefcase"


const CVPage = () => {
  return (
    <Layout className={styles.cvPage}>
      <SEO title="CV" />

      <div className={`container ${styles.cv}`}>
        <header className={styles.header}>
          <section className={styles.info}>
            <div className={styles.name}>
              <span className={styles.firstname}>Hossein</span>
              <span className={styles.lastname}>Maktoobian</span>
            </div>
            <div className={styles.jobTitle}>Full Stack Web Developer</div>
          </section>

          <section className={styles.contacts}>
            <ul className={styles.links}>
              <li className={styles.link} >
                <a data-label='P' href="tel:+989134625632">+98 913-462-5632</a>
              </li>
              <li className={styles.link} >
                <a data-label='E' href="mailto:8bitsight@gmail.com">8bitsight@gmail.com</a>
              </li>
              <li className={styles.link} >
                <a data-label='W' href="https://hmak.me">hmak.me</a>
              </li>
            </ul>
          </section>
        </header>


        <aside>
          <section className={styles.profile}>
            <header>
              <h3>Profile</h3>
            </header>

            <p>Self taught programmer who is eager to learn more and more everyday. I got engaged with computers when I was 5, that was the
            beginning of the love story. Started my web development career in high school (2013) and kept it up until this moment. I've coded
            in various programming languages but recently chose JS as my speaking language.</p>
          </section>

          <section className={styles.awards}>
            <header>
              <h3>Awards</h3>
            </header>

            <div>
              <span className={styles.date}>Jul 28, 2018</span>
              <span className={styles.info}>18th Iran National Skills</span>
              <span className={styles.award}>Gold Medal</span>
            </div>

            <div>
              <span className={styles.date}>Aug 27, 2019</span>
              <span className={styles.info}>45th WorldSkills Competition</span>
              <span className={styles.award}>Medallion Of Excellence</span>
            </div>
          </section>

          <section className={styles.socials}>
            <header>
              <h3>Socials</h3>
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
          <section className={styles.education}>
            <header>
              <BookIcon />
              <h3>Education</h3>
            </header>

            <div>
              <span className={styles.date}>Sep 23, 2015 - Jan 20, 2018</span>
              <span className={styles.field}>Associate of Software Engineering</span>
              <span className={styles.university}>Mohajer Technical and Vocational College</span>
            </div>

            <div>
              <span className={styles.date}>Sep 23, 2019 - Now</span>
              <span className={styles.field}>Bachelor of Software Engineering</span>
              <span className={styles.university}>Shamsipour Technical and Vocational College</span>
            </div>
          </section>

          <section className={styles.work}>
            <header>
              <BriefcaseIcon />
              <h3>Experience</h3>
            </header>

            <div>
              <span className={styles.date}>2014 - Now</span>
              <span className={styles.jobTitle}>Freelance Developer</span>
              <p className={styles.description}>I've been a freelance developer since 2014. Created an online shopping website
                using pure <b>PHP</b>, <b>HTML</b> and <b>CSS</b> as my first project. Then I registered in a freelancing
                website and took a couple of iOS mobile applications and created them with <b>Objective-C</b> and <b>Swift</b>.
                I've built on mobile and desktop games using <b>Unity Engine</b>. I also created full websites.</p>
            </div>

            <div>
              <span className={styles.date}>Feb 2016 - Mar 2016</span>
              <span className={styles.jobTitle}>iOS Developer</span>
              <span className={styles.company}>Ravis | Isfahan, Iran</span>
              <p className={styles.description}>Ravis is a flight ticket reseller which was providing a platform to sell
                charter flight tickets online. They had a fully functional website and I've joined their team to develop
                an iOS application with <b>Swift</b> to communicate with their APIs and provide the same functionality to
                their mobile users.</p>
            </div>

            <div>
              <span className={styles.date}>2016 - 2017</span>
              <span className={styles.jobTitle}>Front-end Developer</span>
              <span className={styles.company}>Solar Sky | Iceland</span>
              <p className={styles.description}>I was working with a team of <b>.NET</b> developers which was working remotely
                with Solar Sky which was a cleaning services company. We were working on their internal management panel to
                make managing their employees and clients easier. It was built on a <b>C#</b> and <b>.NET</b> base and I
                implemented their UI designs with <b>HTML5</b>, <b>SCSS</b> and <b>jQuery</b>.</p>
            </div>

            <div>
              <span className={styles.date}>Jul 2017 - Dec 2017</span>
              <span className={styles.jobTitle}>Founder & CTO</span>
              <span className={styles.company}>Royal Club | Isfahan, Iran</span>
              <p className={styles.description}>I've gathered a team and planned to create a mobile cards game with unity.
                As it was my first experience of starting a team and managing the project, the project failed after 6 months.
                I've learned a lot about our mistakes that caused the project to fail. I was developing the server side application
                using <b>Node.js</b> and the rest of the team was designing and implementing the UI and developing the
                game logic and UI interactions, we used a git server to manage our project code base.</p>
            </div>

            <div>
              <span className={styles.date}>Jan 2018 - Aug 2018</span>
              <span className={styles.jobTitle}>Co-Founder & CTO</span>
              <span className={styles.company}>Kavoshak | Isfahan, Iran</span>
              <p className={styles.description}>Just right after failing my last project, I joined another team of my friends
                to work in their startup project which was a price comparison website that crawls online shops and gathers
                prices of various products and shows them to the user. It was meant to trace product prices in online shops and
                make a competition between them and let the user find the lowest price available. I was working on the project CMS
                using <b>Laravel</b> and also created a website crawler using <b>Python</b>. I quit the team and project when I had
                to move to WorldSkills preparation camps.</p>
            </div>

            <div>
              <span className={styles.date}>Mar 2019 - May 2019</span>
              <span className={styles.jobTitle}>Front-end Developer</span>
              <span className={styles.company}>Raadkish | Kish, Iran</span>
              <p className={styles.description}>During my training for WorldSkills 2019 competition, I've joined Raadkish
                as a front-end developer to improve my skills there. They were working on startup projects mostly in fintech
                and tourist services. I've learned to code in <b>React</b> to develop the front-end parts of the websites.
                I've also worked on a part of <b>React Native</b> mobile application which was needed in tourist guide
                application. Working along with <i>Hadi Mostafapour</i> took me to another level of web development. It was a great
                experience to see how things can be done better and faster, and learn best practices and new tools and technologies
                in web development.</p>
            </div>

            <div>
              <span className={styles.date}>Dec 2019 - Jul 2020</span>
              <span className={styles.jobTitle}>Full-stack Developer</span>
              <span className={styles.company}>Kish Airport | Kish, Iran</span>
              <p className={styles.description}>A company named <i>Aratek</i> which is working with the <i>Kish International Airport</i>,
                outsourced their <b>Load & Balance</b> project as a freelance project to me. Load and balance is consisted of some procedures to find
                the center of gravity of an airplane to use it for taking-off and landing. They were calculating the CG manually on
                papers, and I created a website on their local network to do this automatically. It is created with <b>Laravel</b>
                and <b>React</b>. The main challenge of this project was its precision in calculations. I had to learn everything
                about it, to be able to turn it into an application. Another challenging part of this project was its' data entry
                forms, there was a lot of nested and related data entry forms which was addressed by creating a form scaffold structure,
                to create all those forms automatically based on the database data structure. I also had to work with the DCS APIs
                to get flights and passengers data.</p>
            </div>

            <div>
              <span className={styles.date}>Jan 2020 - May 2020</span>
              <span className={styles.jobTitle}>Full-stack Developer</span>
              <span className={styles.company}>Hamresan | Tehran, Iran</span>
              <p className={styles.description}>I joined as the first developer to the <i>Hamresan</i> company as a full-stack
                developer. We started a PWA application for the <i>Kish Ports organization</i>. The application was meant to show
                the flight and cruises planning to the user, and let them get their flight boarding pass with their phones. It also
                had a feature to reserve and buy cruise tickets. This project was built with <b>Node.js</b> and <b>React</b> and
                used <b>GraphQL</b> for the communication between the client and the server. It also had a real-time communication
                with the server to get live information about flights and cruises. There was some challenging interface
                implementations which was fully customized with the latest UI design techniques.</p>
            </div>

            <div>
              <span className={styles.date}>May 2020 - Now</span>
              <span className={styles.jobTitle}>Project Manager & Team Lead</span>
              <span className={styles.company}>Hamresan | Tehran, Iran</span>
              <p className={styles.description}>After the company decided to recruit more developers, I've worked as the project
                manager and the team lead, since I had experience of running my own teams, read about <b>Scrum</b> and project
                managing techniques and guided the team to build the applications in the right structure. We have created several
                web applications since then. A PWA Audio Book and Podcast platform, a couple of medical event websites and an
                online learning platform. Meanwhile, I also worked as a Back-end developer and was implementing a Node.js and React
                framework with <b>Typescript</b> which boosts bootstrapping our projects since we start new projects with the same
                stack.</p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default CVPage
