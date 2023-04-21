import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import profile from "../public/images/ife.jpg";
import about from "../public/images/ife2.jpg";
import skills from "../public/images/skills.png";
import p1 from "../public/images/p1.jpg";
import p2 from "../public/images/p2.jpg";
import p3 from "../public/images/p3.jpg";
import p4 from "../public/images/p4.jpg";
import p5 from "../public/images/p5.jpeg";
import p6 from "../public/images/p6.jpg";

function Home() {
  useEffect(() => {
    let header = document.querySelector("header");
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    // Darkmode
    let darkmode = document.querySelector("#darkmode");

    const handleScroll = () => {
      header.classList.toggle("shadow", window.scrollY > 0);
    };

    const handleMenuClick = () => {
      navbar.classList.toggle("active");
    };

    const removeMenuHandler = () => {
      navbar.classList.remove("active");
    };

    const handleDarkMode = () => {
      if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
      } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
      }
    };

    window.addEventListener("scroll", removeMenuHandler);
    window.addEventListener("scroll", handleScroll);
    menu.addEventListener("click", handleMenuClick);
    darkmode.addEventListener("click", handleDarkMode);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", removeMenuHandler);
      window.removeEventListener("click", handleMenuClick);
      window.removeEventListener("click", handleDarkMode);
    };
  }, []);
  return (
    <>
      <Head>
        <title> Frontend Developer | Ife Obijiofor </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="My portfolio showcases my experience creating dynamic and visually appealing web applications using HTML, CSS, SASS, JavaScript, ReactJS, and NextJS 13."
        ></meta>
      </Head>

      <header>
        <a href="#" className="logo">
          Ife
        </a>

        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div className="bx bx-moon" id="darkmode"></div>
        </ul>
      </header>

      {/* Home */}
      <section className="home" id="home">
        <div className="social">
          <a href="https://github.com/ifeobi" target="_blank" rel="noopener">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ifechukwu-obijiofor-761040109/"
            target="_blank"
            rel="noopener"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="home-img">
          <Image src={profile} alt="Ifechukwu Obijiofor" />
        </div>
        <div className="home-text">
          <span>Hello, I'm</span>
          <h1>Ife Obijiofor</h1>
          <h2>Frontend Developer</h2>
          <p>
            Welcome to my portfolio website! <br /> As a frontend developer, I
            strive to create <br /> engaging and intuitive user experiences{" "}
            <br />
            through my designs and code.
          </p>
          <a href="tel:+2347088366937" className="btn">
            Contact Me
          </a>
        </div>

        <div className="scroll-down">
          <a href="#about">
            <i className="bx bx-mouse"></i>
            <span>Scroll Down</span>
            <i className="bx bxs-down-arrow-alt"></i>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="heading">
          <h2>About</h2>
          <span>Backstory</span>
        </div>

        {/* about content */}
        <div className="about-container">
          <div className="about-img">
            <Image src={about} alt="" />
          </div>
          <div className="about-text">
            <p>
              As a lawyer based in Abuja, Nigeria, I have always been an avid
              admirer of the rapid evolution of technology especially in this
              21st century. I recognized that the cross-border application and
              relevance of technology provided an opportunity for me to be part
              of the global tech community, and I was determined to be part of
              it. To achieve this, I deployed my research skills from law to
              dive deep into tech, self-teaching myself HTML, CSS, JS, React,
              and Nextjs 13 through online resources like Udemy, Youtube, and
              Chatgpt.
            </p>
            <br />
            <p>
              I am eager to learn more, join a team that will challenge me to
              enhance my technical skills and contribute to the global tech
              community.
            </p>

            <div className="information">
              {/* box 1 */}
              <div className="info-box">
                <i className="bx bxs-user"></i>
                <span>Ife Obijiofor</span>
              </div>

              {/* box 2 */}
              <div className="info-box">
                <i className="bx bxs-phone"></i>
                <span>+234 708 836 6937</span>
              </div>

              {/* box 3 */}
              <div className="info-box">
                <i className="bx bxs-envelope"></i>
                <span>ifeobijiofor1@gmail.com</span>
              </div>
            </div>

            <a
              href="https://ibb.co/9Y8S9P0"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills" id="skills">
        <div className="heading">
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>

        {/* Skills Content */}
        <div className="skills-container">
          <div className="bars">
            {/* Box 1 */}
            <div className="bars-box">
              <h3>HTML</h3>
              <span>90%</span>
              <div className="light-bar"></div>
              <div className="percent-bar html-bar"></div>
            </div>

            {/* Box 2 */}
            <div className="bars-box">
              <h3>CSS</h3>
              <span>70%</span>
              <div className="light-bar"></div>
              <div className="percent-bar css-bar"></div>
            </div>

            {/* Box 3 */}
            <div className="bars-box">
              <h3>JavaScript</h3>
              <span>64%</span>
              <div className="light-bar"></div>
              <div className="percent-bar js-bar"></div>
            </div>

            {/* Box 4 */}
            <div className="bars-box">
              <h3>ReactJs</h3>
              <span>65%</span>
              <div className="light-bar"></div>
              <div className="percent-bar react-bar"></div>
            </div>

            {/* Box 4 */}
            <div className="bars-box">
              <h3>NextJs</h3>
              <span>60%</span>
              <div className="light-bar"></div>
              <div className="percent-bar next-bar"></div>
            </div>
          </div>
          <div className="skills-img">
            <Image src={skills} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="heading">
          <h2>Services</h2>
          <span>My Services</span>
        </div>
        <div className="services-content">
          {/* Box 1 */}
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>
              Web <br /> Development
            </h3>
          </div>

          {/* Box 2 */}
          <div className="services-box">
            <i className="bx bx-server"></i>
            <h3>
              Frontend <br /> Development
            </h3>
          </div>

          {/* Box 3 */}
          <div className="services-box">
            <i className="bx bx-brush"></i>
            <h3>
              UI/UX <br /> Design
            </h3>
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section className="portfolio" id="portfolio">
        <div className="heading">
          <h2>Portfolio</h2>
          <span>My Recent Works</span>
        </div>
        <div className="portfolio-content">
          <a href="https://stripe-tec.com" target="_blank" rel="noopener">
            <div className="portfolio-img">
              <Image src={p1} alt="" />
            </div>
          </a>
          <a href="https://gasport.ng" target="_blank" rel="noopener">
            <div className="portfolio-img">
              <Image src={p2} alt="" />
            </div>
          </a>
          <a href="https://belandona.vercel.app" target="_blank" rel="noopener">
            <div className="portfolio-img">
              <Image src={p3} alt="" />
            </div>
          </a>
          <a
            href="https://coachcordel.vercel.app"
            target="_blank"
            rel="noopener"
          >
            <div className="portfolio-img">
              <Image src={p4} alt="" />
            </div>
          </a>
          <a
            href="https://github.com/ifeobi/mealsDemo"
            target="_blank"
            rel="noopener"
          >
            <div className="portfolio-img">
              <Image src={p5} alt="" />
            </div>
          </a>
          <a
            href="https://github.com/ifeobi/IT-Solutions"
            target="_blank"
            rel="noopener"
          >
            <div className="portfolio-img">
              <Image src={p6} alt="" />
            </div>
          </a>
        </div>
      </section>

      {/* contact */}
      {/* <section className="contact" id="contact">
        <div className="heading">
          <h2>Contact</h2>
          <span>Connect With Me</span>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Your Full Name" />
            <input type="text" name="" id="" placeholder="Your Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Message Here..."
            ></textarea>
            <input type="button" value="Send" className="contact-button" />
          </form>
        </div>
      </section> */}

      {/* footer */}
      <div className="footer">
        <h2>Ife Obijiofor</h2>
        <div className="footer-social">
          <a href="https://github.com/ifeobi" target="_blank" rel="noopener">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ifechukwu-obijiofor-761040109/"
            target="_blank"
            rel="noopener"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>

      {/* copyright */}
      <div className="copyright">
        <p>&#169; Ife Obijiofor All Right Reserved.</p>
      </div>
    </>
  );
}

export default Home;
