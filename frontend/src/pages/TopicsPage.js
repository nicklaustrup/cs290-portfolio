import React, { useState, useEffect} from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function TopicsPage() {

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
            <h2>Web Dev Concepts</h2>
            <nav className="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizeImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="servers">
                <h3>
                    Web Servers
                </h3>
                <p>
                    A <strong>designated home page</strong> is the default document that is displayed for a given domain and is typically mapped using just a "/" after the host/domain. In almost all real-world web applications, the application is configured to return "index.html" when a GET request is received on "/". In Microsoft .NET applications, the use of "default.html" as a naming convention is allowed for the homepage.
                </p>
                <p>
                    The web dev / inspector network tab shows details relating to <strong>HTTP requests and responses</strong> when visiting websites. You can see the <strong>status code</strong> of the request which is a number returned by the server that signifies if the request was successful or not. <strong>Request methods</strong>, such as GET or POST, are what web servers use to determine if your request is to view a resource or attempt to update something in a database. The <strong>URL</strong> is the location of the resource you are requesting. <strong>Headers</strong> tell the browser more information about th request such as the language, cache controls, host, encoding, user-agent, and more.
                    The primary difference between a file's details on your local machine versus from a web server is the web server version is communicating over the internet and therefore requires additional information.
                    This ensures that the information sent and received adheres to standardized transmission protocols. When viewing a local file, your computer does not need to transmit over the internet so does not need these additional headers.
                </p>
                <p>
                    A <strong>200 status code</strong> signifies that a file has been successfully located and returned while the 400 status found means that there was an error locating the resource.
                    The favicon.ico has a 200 status code because the web browser was able to successfully locate and use the favicon file. Meanwhile, the main.css and main.js files were requested by the web browser
                    but could not be located so returned 400 status codes.
                </p>
                <p>
                    There are three main components to every <strong>URL</strong>. Lets take a look at the URL "https://web.engr.oregonstate.edu/~laustrun/index.html". First there is the <strong>scheme</strong>, "https" in our example, which identifies the protocol the web client must use to request the resource. This can be HTTP(S), FTP(S), SMS, file, and more.
                    Next, there is the <strong>domain</strong> "oregonstate.edu" which is the name of the machine where the resource is hosted and includes a <strong>subdomain</strong>, "web.engr." which is just a subsection of the primary domain. The domain, also known as server name / host name, is mapped to an IP address which is located by a <strong>DNS service</strong>.
                    The final part of a URL is the <strong>path</strong> and typically represents the physical location of a file on a web server. The path in our example is "/~laustrun/index.html" which is the location of the designated homepage within the laustrun folder.
                </p>
            </article>

            <article id="frontendDesign">
                <h3>
                    Frontend Design
                </h3>
                <p>
                    <strong>Frontend design</strong> means to create the look and feel of the website with considerations to the experience of the user.  Frontend encompasses everything you see when you load up a page or app, including the graphical user-interface as well as the interactive experience. This also includes the <strong>usability and inclusivity</strong> which is the measure of quality of a user's experience when interacting with the frontend and is defined by the 5 E's.
                </p>
                The <strong>Five "E"s of Usability:</strong>
                <dl>
                    <dt><strong>Effective:</strong></dt>
                    <dd>How helpful the site is at helping users meet their goal.</dd>
                    <dt><strong>Efficient:</strong></dt>
                    <dd>Users can perform tasks in the least amount of steps.</dd>
                    <dt><strong>Easy to Navigate:</strong></dt>
                    <dd>How easily users can understand using the site to achieve their goals.</dd>
                    <dt><strong>Error-free:</strong></dt>
                    <dd>The site does not contain accessibility or availability issues.</dd>
                    <dt><strong>Engaging:</strong></dt>
                    <dd>It fits the unique needs of the intended audience in content and design.</dd>
                </dl>
                <p>
                    Page-layout tags are <strong>block-level</strong> elements and help break up the flow of content by displaying them with a new-line before and after the element. Each of the tags serves a slightly different purpose. The <strong>&lt;header&gt;</strong> tag is typically reserved for the banner of the site and is used to display the name, publisher, and marketing slogan. The <strong>&lt;nav&gt;</strong> tag distinguishes this block of code as the site navigation links. <strong>&lt;main&gt;</strong> is used to signify the primary block of content or purpose for the page. <strong>&lt;section&gt;</strong> is used to group together a block of content that is related with a common theme, such as a grouping of <strong>&lt;article&gt;</strong>s. &lt;article&gt;s are specific topics with second-level headlines (&lt;h2&gt;). <strong>&lt;aside&gt;</strong> is typically used in conjunction with an &lt;article&gt; to include related content and floats to the left or right but can be used for other things such as navigation. The <strong>&lt;footer&gt;</strong> is below the <strong>&lt;main&gt;</strong> tag and is used to display legal information, copyright, and critical links to a site.

                </p>
                <strong>Anchors</strong>(&lt;a&gt;) are used to create hyperlinks between pages or to certain places within a page.
                <ol>
                    <li>External: an anchor can be used to link to external pages by specifying the URL in the href attribute. Example: &lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;</li>
                    <li>Internal: anchors can be used to link to a section on the same page by using an ID attribute associated with the target destination. Example: to link to &lt;article id="topic"&gt;, you would use &lt;a href="#topic"&gt;.</li>
                    <li>Navigation: anchors can also be used to link to other pages on the same web server using just the <strong>relative path</strong>. Example: &lt;a href="/en-US/docs/Web/HTML"&gt;
                        You can also use the <strong>absolute path</strong> which includes additional information such as the PC name and parent folders if it is local or the scheme and web server if it is online. See example for "external".</li>
                </ol>
            </article>

            <article id="optimizeImages">
                <h3>
                    Optimizing Images
                </h3>
                <p>
                    {/* <!-- What are the 6 major specifications of images for the web?  And why? --> */}
                    There are six major specifications that we can implement when it comes to <strong>optimizing images</strong>. First, a descriptive file name will improve search engine optimization by helping crawler bots to categorize our images for users who are searching for related images. Second, smaller file sizes reduces the time to load the page which will improve our site's search engine rating. Third, using exact dimensions that are sized to fit the devices they serve will improve usability and help to further reduce load. Fourth, using the correct file format for the type of image you are sharing. Use .JPG for photos, 8-bit .PNG or .GIF for line-art images, and 24-bit .PNG for graphics with true transparency. Fifth, choosing the correct resolution for the device you are serving can increase speed. Finally, selecting the correct color mode for the picture type can improve quality.
                </p>
                <p>
                    {/* <!-- Which file formats are most appropriate for photos and for line art? And why? --> */}
                    For photos and line art, some image formats are better than others. <strong>SVG</strong>, or Scalable Vector Graphics, are very high quality crisp images and thus should only be used for line art and animations or in settings where speed and load are not important. <strong>GIF</strong>, or Graphics Interchange Format, are best suited for line art due to their 8-bit transparency and animation capabilities. <strong>PNG</strong>, or Portable Network Graphics, have true transparency, alpha channel, and are best for shapes, solid colors, and line art. <strong>JPG</strong>, or Joint Photographic Experts Group, and <strong>WebP</strong> are both typically used for photographic images due to its ability to compress images while maintaining quality.
                </p>
            </article>

            <article id="favicons">
                <h3>
                    Favicons
                </h3>
                <p>
                    {/* <!-- How do browsers and devices use favicons?  --> */}
                    <strong>Favicons</strong> are graphical icons usually depicting a logo or marketing material that represents a brand. They are added to browser tabs to give a visual shortcut so users can quickly identify at a glance the website that's loaded in a tab. Additionally, when a shortcut to a website is saved on a mobile device such as iPhone or Android, the favicon is displayed as a graphical icon alongside the icons of other apps. Website owners can create their own or generate them using online tools. To display them, you simply add the favicon image to your site directory, add a reference link to the header of each page, and add a web manifest file to the root. It is considered best practice to include different sized favicons for different device types.
                </p>
            </article>

            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>
                    {/* <!-- What are the main reasons to incorporate stylesheets in websites and apps?--> */}
                    <strong>Cascading Stylesheets,</strong> or CSS, is a declarative programming language that is used to apply styles and behaviors to the elements of HTML. It is used to improve usability, legibility, and adhere to brand requirements. HTML has a predefined default style that is applied to all documents. CSS's role is to override those defaults using a system of weighted calculations to determine which style is applied to certain elements.
                </p>
                <p>
                    {/* <!-- What are the 5 ways to incorporate styles? And why? --> */}
                    There are 5 ways to incorporate styles into your HTML document. <strong>External</strong> linking is when CSS is written in a styles file, denoted with the .css file type, and then linked in the head of the HTML file such as with &lt;link rel="stylesheet" href="App.css"&gt;. This method provides styles to globally to all pages that link to it. Another external way to incorporate CSS is to use <strong>imports</strong> in the global stylesheet. This is primarily done when wanting to separate styles by component. The next three ways are are all <strong>internal</strong> to the HTML file. <strong>Embedded</strong> style tags are written directly into the HTML and follow the same syntax as the CSS file: &lt;style&gt; h1 &rbrace;color:gold;&rbrace; &lt;/style&gt;. <strong>Inline</strong> is when CSS is applied directly in the HTML tag: &lt;h1 color="blue" /&gt;. This method is considered out of date. Finally, <strong>JavaScript</strong> can be deployed to manipulate the style by fetching the tag and applying style to it: document.getElementsByTagName('h1').style.color = 'purple';.
                </p>
            </article>

            <article id="javascript">
                <h3>JavaScript</h3>
                <p>
                    {/* <!-- What are the main data types?--> */}
                    <strong>JavaScript</strong> is a programming language that is widely used in web development. The language has six main data types that its variables can use. These are numbers, boolean values (either true or false), strings, symbols, the special values undefined and null, and objects. JavaScript infers the variable's type at runtime.
                </p>
                <p>
                    {/* <!-- How are objects, arrays, and JSON used? --> */}
                    In JavaScript, objects are sets of name-value pairs much like dictionary in Python or HashMap in Java. The names are called <strong>properties</strong> in JavaScript. In JS, <strong>Arrays</strong> are also objects but the property names are strings named '0', '1', '2', etc. instead of index numbers. That is because JS requires the properties of an object be string data types. <strong>JSON</strong>, also known as JavaScript Object Notation, is a data structure that is commonly used in transfering data between applications due to the widespread usage and easy availability.
                </p>
                <p>
                    {/* <!-- How are conditionals and loops used? --> */}
                    <strong>Conditionals</strong> are statements that evaluate to true or false and are used to branch code. They follow the common convention of "if-then-else" of other programming languages. If the condition is true, the code within the curly braces is executed or else it continues to the next block for further evaluation. <strong>Loops</strong> are sets of repeating instructions that will continue as long as some condition is met. There are two main types of loops, <strong>for loops</strong> and <strong>while loops</strong>. For loops have their conditional and incrementing pattern established up front and will continue executing during the duration of the conditional. They are usually set up like so: for(initialization statement; loop condition; repeating statement)&rbrace;code to execute&rbrace;. While loops, on the otherhand, will continue to execute indefinitely as long as the condition remains true. Typically, the executing code will reach a point where the condition becomes false. If the programmer fails to account for this, their code could continue looping until the program crashes.
                </p>

                <p>
                    {/* <!-- What is object-oriented programming? --> */}
                    <strong>Object-Oriented Programming</strong>, or OOP for short, is a programming paradigm that informs the methods of creating code. OOP helps to keep code organized by defining the roles of objects. They are expected to have <strong>identity</strong>, <strong>state</strong>, and <strong>behavior.</strong> Identity means that two objects of the same type maintain their distinction and are distinguishable by their address in memory. If they are not located at the same memory address then they are not the same object. State refers to the properties of the object and each object has its own states. They can be the same as other objects or not but they are their own. Behaviors are the methods and functions contained within the objects. In JavaScript, we can assign functions to properties so that when another value is assigned to the property, it invokes the function and saves a new value.
                </p>
                <p>
                    {/* <!-- What is functional programming? --> */}
                    <strong>Functional programming</strong> is another programming paradigm whereby programs are constructed in terms of mathmatical styles. This style is usually the antithesis of OOP because functional attempts not to use objects but rather to solve the underlying problem in mathmatical fashions. In reality, elements of functional programming is found in OOP and in JavaScript as functions are "first class values." This means that functions can be assigned to variables, functions can receive other functions as parameters, and functions can return other functions.
                </p>
            </article>


            <nav id="topReturn" className={isScrolled ? 'topReturn-visible' : 'topReturn'}>
                 <a href="#top">Back to Top<IoIosArrowRoundUp /></a>
                 </nav>
        </>
    );
}

export default TopicsPage;