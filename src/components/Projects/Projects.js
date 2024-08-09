import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projectData = [
  {
    imgPath: require("../../Assets/Projects/1.png"),
    isBlog: false,
    role: 'OpenAI Engineer, Fullstack-developer',
    title: "Lumen 5 Video Generator using AI",
    description:
      "Lumen5 is a video creation platform that allows users to transform text content into engaging videos. \n Lumen5 helps businesses and individuals create videos quickly and easily, often from blog posts or articles. \n Content marketers, social media managers, educators, and anyone looking to create video content without extensive video editing skills can use it.",
    demoLink: "https://lumen5.com/",
  },
  {
    imgPath: require("../../Assets/Projects/2.png"),
    isBlog: false,
    role: 'Software Engineer, App Developer', 
    title: "Web 3.0 social media platform for creators",
    description:
      "A Web 3.0 social media platform for creators, fans and businesses to rock. VOXE aims to give users security, privacy, and monetization opportunities that they deserve.",
    demoLink: "https://www.voxe.io/",
  },
  {
    imgPath: require("../../Assets/Projects/3.png"),
    isBlog: false,
    role: 'Full Stack Developer',
    title: "Customized AI Medical Platform for Streamlining Medical Processes",
    description:
      "🚀 Empowers healthcare professionals to assign personalized medical interviews to patients. \n 🌐 Integrates LangChain and ClaudeAI for intelligent and interactive chatbot-based medical interviews. \n 🌟 Automatically generates detailed and accurate medical interview summaries using advanced algorithms. \n 🗣️ Provides a secure and confidential platform for patients to engage in health-related discussions. \n 📊 Enables physicians to review patient responses, medical history, and relevant details through comprehensive interview summaries.",
    demoLink: "https://smarthistory.ai/",
  },
  {
    imgPath: require("../../Assets/Projects/4.png"),
    isBlog: false,
    role: 'Mobile App Developer, Full Stack Developer',
    title: "Personalized Language Learning with AI-Guided Teachers",
    description:
      "Developed the application that teaches users different languages from scratch. Utilizing OpenAI API and LangChain, the bot's accuracy is enhanced with effective prompts and langchain memory to prevent hallucination. The app offers text-to-voice, real-time streaming of bot replies, and the bot itself reads responses using Azure Text-to-Speech API. Amazon DynamoDB is used to store data, and Stripe payment integration is seamlessly implemented.",
    demoLink: "https://yourteacher.ai/",
  },
  {
    imgPath: require("../../Assets/Projects/5.png"),
    isBlog: false,
    role: 'Mobile app Developer',
    title: "PickleJar Live ( Audio app )",
    description:
      "Developed the application that teaches users different languages from scratch. Utilizing OpenAI API and LangChain, the bot's accuracy is enhanced with effective prompts and langchain memory to prevent hallucination. The app offers text-to-voice, real-time streaming of bot replies, and the bot itself reads responses using Azure Text-to-Speech API. Amazon DynamoDB is used to store data, and Stripe payment integration is seamlessly implemented.",
    demoLink: "https://apps.apple.com/us/app/picklejar-live/id1517697776",
  },
  {
    imgPath: require("../../Assets/Projects/6.png"),
    isBlog: false,
    role: 'Flutter app Developer, Hybrid App Developer',
    title: "BAZAR App",
    description: "Technologies Utilized are: \n * Flutter/Dart \n * Firebase \n * Firebase Authentication \n * Firebase Cloud \n * Firebase Storage \n * Firebase Messaging \n App has two parts,\n 1- Admin App \n 2- onsumer App \n * Real-time data. \n * Notification for Every Event \n * Register Form for Night \n * Gallery for all old night Images Album \n * Flickering. \n  * Lighting/Color can be adjusted by dmin.\n * Stories New Posters for Night",
    demoLink: "https://play.google.com/store/apps/details?id=com.bazarmarseille.bazar",
  },
  {
    imgPath: require("../../Assets/Projects/7.png"),
    isBlog: false,
    role: 'CMS/PHP/JavaScript Fullstack Developer',
    title: "Merchandising eCommerce  MSNBC Store",
    description:
      "- Efficient Documentation:* Utilized Zendesk for streamlined documentation, ensuring clear and accessible information - Advanced Ecommerce Operations:* Powered by Shopify, MSNBC Store ensures seamless Ecommerce operations and streamlined cart functionality. - Captivating Photo Galleries:* Integrated PhotoSwipe for visually engaging photo galleries, enhancing the overall user experience. - Comprehensive Analytics:* Utilized Google Analytics (UA), ensuring detailed and actionable insights. ",
    demoLink: "https://play.google.com/store/apps/details?id=com.bazarmarseille.bazar",
  },
  {
    imgPath: require("../../Assets/Projects/8.png"),
    isBlog: false,
    role: 'Software Engineer',
    title: "Lockars  Shop anywhere",
    description:
      "Lockars will change the way parcels are delivered with an eco-friendly solution in urban and densely populated areas of Europe with a highly convenient, accessible and environmentally friendly solution. Our open network of shared parcel lockers meets the increased customer convenience and operational efficiency of home deliveries and improves service for consumers, retailer carriers and communities.",
      demoLink: "https://play.google.com/store/apps/details?id=com.lockars.lockarsapp&pli=1"
  },
  {
    imgPath: require("../../Assets/Projects/9.png"),
    isBlog: false,
    role: 'iOS/Android App Developer',
    title: "iOS App & AdBlocker & QR Scanner (Safari Extension)",
    description:
      "Ad Blocker & QR Scanner is a versatile iOS application that brings the power of ad blocking and web security to the forefront of your online experience. The app is designed to make your web browsing faster, safer, and more efficient by seamlessly combining ad-blocking capabilities with robust security features. With the added feature of a built-in QR code scanner, this app goes beyond ad-blocking. It allows users easily scan QR codes to access websites, promotions, and discounts, all while keeping your online activities secure.",
      demoLink: "https://apps.apple.com/us/app/ad-blocker-qr-code-scanner/id6446063518"
  },
  {
    imgPath: require("../../Assets/Projects/10.png"),
    isBlog: false,
    role: 'Mobile App Developer',
    title: "JSON Apple Xcode Git iOS Development Swift",
    description:
      "TipsTop gives required information in a systematic way to find the best bets. It shows eligible betting predictions, stats, and advice with detailed analysis. It covers 9 sports and more than 350 competitions. Users can check live score, results and stats.",
      demoLink: "https://apps.apple.com/in/app/tipstop-sports-betting-tips/id1482740612"
  },
  {
    imgPath: require("../../Assets/Projects/11.png"),
    isBlog: false,
    role: 'Software Engineer',
    title: "Music Marketplace:- LOOPSTOCK",
    description:
      "Loopstock comes with fully packed Features: \n 1. Instant and Secure Payment Processing \n 2. Custom Licenses \n 3. Ownership Rights \n 4. Upload beats, loops \n 5. User Authentication (Google / Facebook) \n 6.  aypal/Stripe for making payment \n 7. Sound Streaming \n 8. 25+ Music Instruments \n 9. Loop/Samples \n 10. Worldwide marketplace",
      demoLink: "https://loopstock.market/"
  },
  {
    imgPath: require("../../Assets/Projects/12.png"),
    isBlog: false,
    role: 'CMS/PHP/JavaScript Fullstack Developer',
    title: "Retail & Goods eCommerce  HBO Shop",
    description:
      "- Efficient Documentation: Utilized Zendesk for streamlined documentation, ensuring clear and accessible information \n - Advanced Ecommerce Operations: Powered by Magento 2, the HBO Shop boasts fficient cart functionality for seamless transactions. \n - Captivating Photo Galleries: Integrated PhotoSwipe for visually engaging photo galleries, enhancing the overall user experience. \n -  Comprehensive Analytics: Employed Google Analytics, GA4, and Google Ads Conversion Tracking for data-driven insights. \n - JavaScript Frameworks: Implemented React, Handlebars, and Backbone.",
      demoLink: "https://loopstock.market/"
  },
  {
    imgPath: require("../../Assets/Projects/13.png"),
    isBlog: false,
    role: 'Trading Engineer',
    title: "FinTech Trading Platform  OptionBlitz",
    description:
      "- JavaScript Framework: Implemented React for a dynamic and interactive user interface, enhancing the overall trading experience \n - Security Measures: Ensured enhanced security with HSTS (HTTP Strict Transport Security), protecting user data during transactions. \n - Optimized Metadata: Utilized Open Graph for optimized metadata, ensuring accurate and appealing content sharing on social platforms. \n - JavaScript Graphics: Integrated Recharts for dynamic and visually appealing graphical representations, enhancing data visualization.",
      demoLink: "https://www.optionblitz.co/"
  },
  {
    imgPath: require("../../Assets/Projects/14.png"),
    isBlog: false,
    role: 'Mobile App Developer',
    title: "Jetzy - Connect, Travel, Enjoy",
    description:
      "Jetzy is a exclusive social discovery app. \n ✔ connects you with like-minded individuals and gives you access to VIP benefits and discounts to help you find the greatest bargains on restaurants \n hotels, flights, nightlife, and more. \n ✔ Jetzy's full concierge platform allows you to explore activities, locate the best hotel rates, meet new people, and earn awards while enjoying local \n unique experiences. ",
      demoLink: "https://apps.apple.com/in/app/jetzy-connect-travel-enjoy/id1019546379"
  },
  {
    imgPath: require("../../Assets/Projects/15.png"),
    isBlog: false,
    role: 'Mobile App Developer',
    title: "Burn Return v4.0 Release",
    description:
      "Delivered new features, fixed bugs, and improved performance of the Burn Return iOS and watchOS apps by: • Creating a migration plan for various frameworks and tools – Parse ObjC to Firebase, CocoaPods to Swift Package Manager • Handling Burn Credit correctly updating following a successful challenge • Enhancing security and reliability in the bank account process • Enhancing calorie  urn calculations • Standardizing design system items throughout app, including date format, colors, and text labels • Addressing issues with AutoLayout and storyboards by fixing spacing, colors for  hallenge tracking, missing buttons, UITableView delegate method updates, and setting proper user interface constraints • Assessing growth strategy for the app including user retention, new users,  roduct market fit, etc • How can we best prevent people from creating multiple emails / accounts and cashing in multiple times for one successful challenge? Jerry mentioned possibly recognizing bank ccount(?) • Optimizing user flows, including handling registration, deposits, withdrawals, failed challenges, retrying challenges, and sign ups for new challenges  ",
      demoLink: "https://apps.apple.com/us/app/burn-return/id1558432824"
  },
  {
    imgPath: require("../../Assets/Projects/16.png"),
    isBlog: false,
    role: 'Mobile App Developer',
    title: "QR Code & Barcode Scanner",
    description:
      "QR code Reader and scanner is a highly fast and premium application to scan all bar codes or QR codes. Fast Barcode/QR code scanner can read and decode all QR codes including products, URL, contacts, text, emails, location, calendar, and much more. You can even use QR & Barcode Scanner and Reader App to scan coupons codes to receive discounts and save some money. With the help of the QR code generator feature, you can easily generate QR code and it allows you to save, share QR code you just created. ",
    demoLink: "https://apps.apple.com/us/app/id1529492852"
  },
  {
    imgPath: require("../../Assets/Projects/17.png"),
    isBlog: false,
    role: 'Python/Django Developer',
    title: "EZ Corp legal entity formation",
    description:
      "Goal: Create a website for LLC/Corporation formation in any of the US states. Starting from the homepage end users proceed through the sales funnel, up to the point of checkout where the order is placed & access to the personal account is given. All legal entity formation requests are reviewed by incorporation professionals from within a CRM. The CRM enables experts and customer service agents to look up client data, filter & sort it, file new companies with US states as well as post updates on the existing ones in a timely fashion.",
    demoLink: "https://ez-corp.org/"
  },
  {
    imgPath: require("../../Assets/Projects/18.png"),
    isBlog: false,
    role: 'Fulltime job on this project as Backend (django) and Frontend (react) developer',
    title: "Fulltime job in Liveedu.tv team",
    description:
      "Fulltime job on this project as Backend (django) and Frontend (react) developer",
    demoLink: "https://ez-corp.org/"
  },
  {
    imgPath: require("../../Assets/Projects/19.png"),
    isBlog: false,
    role: 'Frontend Developer',
    title: "Fulltime job in Liveedu.tv team",
    description:
      "Our client required a comprehensive warehouse system for their auto parts company and an attractive, customer-friendly website. We leveraged Django and Vue.js frameworks to build an automated warehouse system and a personalized user interface for efficient order processing, optimized stock management, and data handling. With our solution, we doubled the client's operational speed and enhanced their customers' experience. \n Technologies used: Javascript, Python, Django, Vue.js, Google Maps API, REST API, PostgreSQL, HTML5, CSS",
    demoLink: "https://www.onlydrive.ee/"
  },
  {
    imgPath: require("../../Assets/Projects/20.png"),
    isBlog: false,
    role: 'Web Developer',
    title: "A Community Website Development Using MERN Stack",
    description:
      "Developed a community platform where different architects can share their work, discuss their ideas with each other and can also compete for different organized exams.",
    demoLink: "https://everyurban.com/"
  },
  {
    imgPath: require("../../Assets/Projects/21.png"),
    isBlog: false,
    role: 'Senior React Front End Developer for Tech Startup',
    title: "Freighty (React.js, Node.js)",
    description:
      "Freighty — the Australian-based start-up, that allows customers to easily add insurance to their cart at checkout. I developed MVP from scratch based on the client's designs and API. I developed a fully working AUTH system based on JWT's and full dashboard and insurance claims functionality in ~3,5 months. The client's team started from integration with Prestashop CMS and plan's to scale to the other global eCommerce CMS systems(Shopify, etc). Technology stack: React.js, Redux, Redux-Saga, Scss, Node.js. ",
    demoLink: "https://www.freighty.com/"
  },
  {
    imgPath: require("../../Assets/Projects/22.png"),
    isBlog: false,
    role: 'Full Stack Development Deliverables',
    title: "A Community Website Development Using MERN Stack",
    description:
      "Rewire the American banking system so that we can positively change the financial path for every hard-working American.",
    demoLink: "https://www.moneylion.com/"   
  },
  {
    imgPath: require("../../Assets/Projects/23.png"),
    isBlog: false,
    role: 'Backend Developer',
    title: "Zenni Optical  MERN stack, React, Node, MongoDB, GraphQL",
    description:
      "Zenni Optical is an online eyewear retailer specializing in affordable prescription glasses, sunglasses, and eyewear accessories. The company was founded in 2003 and offers a wide range of eyewear styles, including metal, plastic, and rimless frames. They also provide prescription sunglasses, sports glasses, and eyewear accessories such as cases, cleaning cloths, and magnifying glasses. In 2021, Zenni Optical approached AllianceTek to revamp their website and update their legacy code. Their website was built using classic PHP, so we embarked on the task of converting it into a modern MERN stack website. As a senior full stack developer (or lead developer or project manager), my primary responsibility involved building their components, writing RESTful APIs, and seamlessly integrating the backend with the frontend.  Tech Stacks: React, MongoDB, Express, Node.js, Material UI, D3.js, HTML, CSS",
    demoLink: "https://www.zennioptical.com/"
  },
  {
    imgPath: require("../../Assets/Projects/24.png"),
    isBlog: false,
    role: 'Software Engineer',
    title: "Hotel Booking Website",
    description:
      "Hotel Booking PWA for Tilden, A San Francisco Boutique Hotel near Union Square. Tilden offers an invigorating solution to urban living, with unfussy spaces and unexpected surprises – just look at our local artwork More than a hotel, we’re an engaging community gathering place where guests experience thoughtful spaces designed with genuine hospitality. The Tilden offers free WiFi, pet-friendly accommodations, mini-fridges and flat-screens in our 118 rooms and suites. ",
    demoLink: "https://www.tildenhotel.com/"
  },
  {
    imgPath: require("../../Assets/Projects/25.png"),
    isBlog: false,
    role: 'I developed the complete Portal',
    title: "InforMed (Portal for Medical Study)",
    description:
      "Overview: Informed.pro is basically a knowledge-sharing platform that gives the opportunity to experienced to share their thoughts and research with all the other people who have the interest to know more about medical terminologies.",
    demoLink: "https://informed.pro/"
  },
  {
    imgPath: require("../../Assets/Projects/26.png"),
    isBlog: false,
    role: 'Front-End development',
    title: "Kit Lender",
    description:
      "LenderKit Lender is the world’s premier outdoor equipment and apparel rental service. With Kit Lender’s streamlined four-system you get the right rental gear at the right price, without any of the headaches. Wherever your adventures may take you, Kit Lender has got you covered.",
    demoLink: "https://www.kitlender.com/"
  },
  {
    imgPath: require("../../Assets/Projects/27.png"),
    isBlog: false,
    role: 'Lead CMS/PHP/JavaScript Fullstack Developer',
    title: "Media eCommerce | Fox News Shop",
    description:
      "- Streamlined Cart Functionality: Ensured efficient WordPress and Woocommerce operations with advanced cart functionality - Advanced Analytics: Employed Adobe Analytics for comprehensive insights, guiding data-driven strategies. - Security Measures: Implemented HSTS for enhanced security, ensuring a safe browsing experience. - Font Scripts: Utilized Google Font API for consistent and visually appealing typography. - Optimized Caching: Employed Varnish for efficient content caching, ensuring swift page loads.  ",
    demoLink: "https://shop.foxnews.com/"
  },
  {
    imgPath: require("../../Assets/Projects/28.png"),
    isBlog: false,
    role: 'Lead CMS/PHP/JavaScript Fullstack Developer',
    title: "Tech eCommerce  Dell Refurbished",
    description:
      "- Advanced Analytics: Leveraged Kount, Snowplow Analytics, and Google Analytics for comprehensive insights, enhancing data-driven decision-making - Robust Security Measures: Implemented Kount for advanced security and reCAPTCHA for enhanced user verification. - Font Scripts: Utilized Google Font API and Font Awesome for a visually appealing and consistent design. - Optimized Web Servers: Utilized Nginx for efficient handling of web requests, ensuring a seamless user experience.",
    demoLink: "https://shop.foxnews.com/"
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((element, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={element.imgPath}
                isBlog={element.isBlog}
                title={element.title}
                role={element.role}
                description={element.description}
                demoLink={element.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
