import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Patrick Dineen Portfolio'
  const siteDescription = "Patrick Dineen's Portfolio"

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hello!
            </h2>
          </header>
          <p>
            I'm a lifelong resident of Chicagoland and currently combining my passion for software development with a decade plus of experience in customer support operations management to help businesses create comprehensive and wholesale solutions for any tech related problem.
            <br /><br />
            When I'm not click-clacking away at a new snippet of code, you'll find me spending time with my wife and daughter with my camera in hand, brewing beer, or playing hockey at Johnny's Ice House.
            <br /><br />
            I'm always open to any new oppurtunity. Please take a look at my resume and my development projects, as well as my GitHub and Instagram.
          </p>
          <ul className="actions">
            <li>
              <a href="https://drive.google.com/file/d/19eTxrIuB1sQSENieaSl_qBv6HLMZbVCj/view?usp=sharing" download className="button">
                My Resume 
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>My Projects</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          {/* <h2>Get In Touch</h2> */}
          <p>
            
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form name='contact' method="post" data-netlify='true'>
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <button type="submit">Netlify Send</button>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Brookfield, Il
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  847-767-0804
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">PatrickJDineen@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
