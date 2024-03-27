import React, { useState, useEffect } from "react";
import MERN from "../images/web-programming-using-mern.jpg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { CiCloudOn } from "react-icons/ci";
import { TbBrandJavascript, TbBrandCss3, TbHtml } from "react-icons/tb";
import { IoIosArrowRoundUp } from "react-icons/io";


function HomePage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
  
        // Check if the user has scrolled down enough to trigger the shrinking effect
        setIsScrolled(scrollTop > 400);
      };
  
      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove scroll event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Run this effect only once on component mount


    return (
        <>
            <h2>Home Page</h2>

            <article>
                {/* Explain career goals */}
                <p>
                    As a university student with a background in <strong>computer science</strong> and a passion for innovation, my career goal is to secure a position at a company known for pushing the boundaries of technology. With a solid foundation in <strong>Software Engineering</strong> from <strong>Oregon State University</strong> and <strong>Kenzie Academy</strong>, I aspire to contribute to cutting-edge projects and developments that shape the future of technology. My aim is to leverage my skills and expertise to make meaningful contributions to advancements in the industry while continuously challenging myself to grow and adapt in this dynamic field.
                </p>

                <p>
                    This site was produced as the capstone for <strong>CS 290 - Web Development</strong> from Oregon State University and serves as a showcase of my ability to create an application using the technology listed below.
                </p>

                {/* Explain technology used in this project */}
                <p>
                    Tech used to build this website:
                </p>
                <dl>
                    <figure className="techFig">
                        <img src={MERN} alt='MERN stack logo' className="mernImg" />
                        <figcaption className="mernCap">MERN stands for MongoDB, Express, React, Node</figcaption>
                    </figure>

                    <dt><FaReact /> React</dt>
                    <dd>React is a frontend framework for creating applications. While initially created by Facebook, it is now open source and actively developed by many contributors. Applications in React are based around the concept of components which are reusable units of UI. </dd>

                    <dt><FaNodeJs /> Node.js</dt>
                    <dd>Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside of a browser. It is often used for building back-end services like APIs for Web or Mobile Apps. </dd>

                    <dt>< SiExpress /> Express</dt>
                    <dd>
                        Express is a framework built on Node.js web server capabilities, designed to streamline its APIs and introduce useful enhancements. It aids in structuring application functionality through middleware and routing, while also providing utilities to Node HTTP objects for added convenience. Additionally, it simplifies the process of rendering dynamic HTTP objects, contributing to smoother web development experiences.
                    </dd>

                    <dt><SiMongodb /> MongoDB</dt>
                    <dd>MongoDB is a popular database management system used in web development. Unlike traditional relational databases, MongoDB is a NoSQL database that stores data in a flexible, document-oriented format, making it well-suited for handling large volumes of unstructured or semi-structured data.</dd>

                    <aside id='restAside'>
                        <h3>
                            REST API
                        </h3>
                        <p>REST: Representational State Transfer</p>
                        <p>API: Application Programming Interface</p>
                    </aside>

                    <dt><CiCloudOn /> RESTful APIs</dt>
                    <dd>A RESTful API is a standardized approach to designing web APIs that allows different systems to communicate with each other over HTTP in a simple and consistent manner. RESTful APIs use standard HTTP methods like GET, POST, PUT, DELETE to perform actions on resources, making it easy for developers to create, read, update, and delete data from web servers.</dd>

                    <dt><TbBrandJavascript /> JavaScript</dt>
                    <dd>
                        JavaScript is a versatile programming language commonly used in web development to add interactivity and dynamic features to websites. It runs on the client side, meaning it executes in the user's web browser, allowing for real-time updates and responsive user experiences. JavaScript is essential for tasks like form validation, DOM manipulation, and creating interactive elements such as sliders, pop-ups, and animations on web pages.</dd>

                    <aside id='restAside'>
                        <h3>
                            CSS
                        </h3>
                        <p>Cascading Style Sheets</p>
                    </aside>

                    <dt><TbBrandCss3 /> CSS</dt>
                    <dd>
                        CSS is a fundamental language used in web development to define the visual presentation of web pages written in HTML. It allows designers and developers to control the layout, styling, and appearance of elements on a webpage, including fonts, colors, spacing, and positioning. CSS enables the creation of visually appealing and responsive websites by separating the content from its presentation, making it easier to maintain and update the design of a website across multiple pages.</dd>

                    <aside id='restAside'>
                        <h3>
                            HTML
                        </h3>
                        <p>Hypertext Markup Language</p>
                    </aside>
                    <dt><TbHtml /> HTML</dt>
                    <dd>HTML is the standard markup language used to create and structure content on web pages. It provides a set of predefined tags that define the structure and semantics of text, images, links, and other elements within a webpage. HTML serves as the foundation of the web, allowing browsers to interpret and render content in a visually coherent and structured manner for users to interact with.</dd>

                </dl>

                <nav id="topReturn" className={isScrolled ? 'topReturn-visible' : 'topReturn'}>
                 <a href="#top">Back to Top<IoIosArrowRoundUp /></a>
                 </nav>

            </article>
        </>
    );
}

export default HomePage;