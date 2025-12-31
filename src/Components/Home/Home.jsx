import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from "./home.module.css"
import CustomTitle from '../CustomTitle/CustomTitle.jsx';
import useAnimation from '../../Hooks/useAnimation.js';
import Counter from '../Counter/Counter.jsx';
import Header from '../Header/Header.jsx';


export default function Home() {
   useAnimation(".cardAnimation ", "showAnimation");
   useAnimation(".titleAnimation " , style.fadeUp);
   const title = "Mahmoud Othman" ;
   const typing = [
      "Full Stack Developer" ,
      "MERN Stack Developer" ,
      "Front-End Developer | UI/UX & React.js" , 
      "Back-End Developer | Node.js & Architecture" ,
      "Database Management | MongoDB"
   ] ;




   const skills = {
      frontend: [
         "HTML5",
         "CSS3",
         "JavaScript (ES6)",
         "React.js",
         "React Router",
         "Context API",
         "Bootstrap",
         "Responsive Design",
         "RESTful APIs",
         "Axios / Fetch",
         "Form Validation (Formik / React Form)",
         "React Hooks",
         "Component Reusability & Props Management"
      ] ,
      backend: [
         "Node.js",
         "Express.js",
         "RESTful APIs",
         "JWT Authentication",
         "Google OAuth",
         "MongoDB",
         "Mongoose",
         "MVC Architecture",
         "Middleware & Routing",
         "Error Handling",
         "Socket.IO" ,
         "Validation & Sanitization",
         "Payment Integrations",
         "Logging & Monitoring"
      ] ,
      tools: [
         "Git",
         "GitHub",
         "GitHub Actions (Cron Jobs)",
         "Postman",
         "NPM",
      ],
      pdf: [
         "PDF Generation (PDFKit)",
         "HTML & CSS to PDF",
         "Multi-page PDF Handling",
         "Excel Import & Export"
      ] ,
      payments: [
         "PayMob API Integration",
         "Fawaterak API Integration ",
         "Vodafone Cash Wallet Integration",
         "Fawry Payment Gateway Integration",
         "Payment Callbacks & Webhooks",
         "Transaction Validation",
         "Token-Based Payment Auth",
         "Order Tracking"
      ] ,
      security: [
         "JWT Auth (Access & Refresh Tokens)",
         "Secure Cookies (HTTPOnly, Secure)",
         "Role-Based Access Control (RBAC)",
         "CORS Configuration",
         "Rate Limiting & Throttling",
         "Input Validation & Sanitization",
         "Prevent NoSQL Injection",
         "Prevent XSS Attacks",
         "Prevent HTTP Parameter Pollution",
         "Secure HTTP Headers (Helmet)",
         "Disable X-Powered-By Header",
         "HTTPS & HSTS",
         "Password Hashing (bcrypt)",
         "Secure Error Handling",
         "Environment Variables Protection",
         "Audit Logs & Monitoring",
         "OWASP Top 10 Best Practices"
      ] ,
      other: [
         "Formik",
         "Yup & Joi Validation",
         "EmailJS",
         "Send Emails By Server Back-end" ,
         "Send SMS" ,
         "Using Multer (Upload Files)" ,
         "Using Cloud External Data" ,
         "Next.js Basics",

      ],
   };

   const SkillSection = ({ title, items }) => (
      <div className="col-md-6 col-lg-4 mb-4">
         <div className="card h-100 shadow-sm">
         <div className="card-body">
            <h5 className="card-title mb-3">{title}</h5>
            <ul className="list-unstyled mb-0">
               {items.map((skill, index) => (
                  <li key={index} className="mb-2">✔   {skill}</li>
               ))}
            </ul>
         </div>
         </div>
      </div>
   );


   return (
      <Fragment>
         <Header typing={typing} title={title} color={"text-black"} colorBtnHome={"text-muted"} linksColor={"bg-white"} />
         <section className={`${style.home} cardAnimation`} >
            <CustomTitle title="Main" />
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className='p-2'>
                        <h3 className={`fw-bold  ${style.fadeUp} my-4`}>Hi, I am Mahmoud Othman</h3>
                        <p className={`${style.info} text-muted`}>
                           Hi, I’m Mahmoud Othman, 
                           a Full Stack Web Developer. 
                           I specialize in building web applications using the MERN stack (MongoDB, Express, React, Node.js). 
                           I enjoy creating clean, functional, and user-friendly interfaces. 
                           I love solving problems and bringing ideas to life on the web.
                        </p>
                        <div className="text-center  text-md-start">
                           <a href={"/Mahmoud.pdf"} download ><button className={`${style.downloadBtn} btn btn-sm me-3 rounded-0 py-2 px-3 my-2`} >Download CV</button></a>
                           <Link to="/projects"><button className={`${style.moreBtn} btn btn-outline-success btn-sm  rounded-0 py-2 px-3 my-2`}>LEARN MORE</button></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className={`${style.imageCard}`}></div>
                  </div>
               </div>
            </div>
         </section>
         
         <section className={`${style.portfolio}`}>
            <div className='container'>
                  <div className="text-center">
                     <h3 className="fw-bold titleAnimation text-muted">Portfolio</h3>
                     <p className="text-muted small titleAnimation">My Work & Projects – Showcasing Real-World Applications, Skills, and Innovative Solutions.</p>
                  </div>
                  <Link to="/projects">
                     <div className="row g-4 my-4 ">
                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12">
                                 <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`}  data-before="Web Applications" >
                                    <img src="/home_one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12"  >
                                 <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`}  data-before="Frontend Development" >
                                    <img src="/home_four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12">
                                 <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`}  data-before="Backend Development">
                                    <img src="/home_two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`}  data-before="Full Stack Projects">
                                    <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <div className="col-md-12">
                                 <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`}  data-before="E-commerce & Online Stores">
                                    <img src="/home_three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>

                              <div className="col-md-12">
                                 <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`}  data-before="Portfolio & Personal Projects">
                                    <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
            </div>
         </section>

         <section className={`${style.services}`}>
            <div className='container'>
               <div className={`text-center ${style.fadeUp}`}>
                  <h3 className='fw-bold titleAnimation text-muted'>Services</h3>
                  <p className="text-muted small titleAnimation">all services include a deep love to the job</p>
               </div>


               <div className={`${style.rowServices} row g-4 m-5 `}>
                  <div className="col-lg-6 col-xl-4 cardAnimation" >
                     <div className={`card rounded-0 position-relative`} style={{height:500}}>
                        <div className={`${style.imgServices} overflow-hidden `}>
                           <img src="/home_one.jpg" className={`${style.photoService}  rounded-0 w-100 h-100 img-fluid object-fit-cover`} alt="title" />
                        </div>
                        <div className="card-body ">
                           <h5 className="card-title mb-3">Web Applications</h5>
                           <p className="small text-muted mb-4">
                              I build interactive web applications with dynamic features and smooth user experience. 
                              These include dashboards, content management systems, and business tools.
                           </p>
                           <Link to="/Projects" className={`${style.linkServices} main-color position-absolute bottom-0 end-0 mx-3 my-4`}>
                              Check Projects <i className={`${style.iconServices} fa-solid fa-angle-right mx-2`}></i>
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 cardAnimation">
                     <div className={`card rounded-0 position-relative`} style={{height:500}}>
                        <div className={`${style.imgServices} overflow-hidden`}>
                           <img src="/home_three.jpg" className={`${style.photoService}  rounded-0 w-100 h-100 img-fluid object-fit-cover`} alt="title" />
                        </div>
                        <div className="card-body">
                           <h5 className="card-title mb-3">Frontend Development</h5>
                           <p className="small text-muted mb-4">
                              I create responsive and visually appealing 
                              user interfaces using React.js, HTML, CSS, and JavaScript, 
                              focusing on usability and performance.
                           </p>
                           <Link to="/Projects" className={`${style.linkServices} main-color position-absolute bottom-0 end-0 mx-3 my-4`}>
                              Check Projects <i className={`${style.iconServices} fa-solid fa-angle-right mx-2`}></i>
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 cardAnimation">
                     <div className={`card rounded-0 position-relative`} style={{height:500}}>
                        <div className={`${style.imgServices} overflow-hidden`}>
                           <img src="/home_one.jpg" className={`${style.photoService}  rounded-0 w-100 h-100 img-fluid object-fit-cover`}alt="title" />
                        </div>
                        <div className="card-body">
                           <h5 className="card-title mb-3">Backend Development</h5>
                           <p className="small text-muted mb-4">
                              I develop robust server-side applications and APIs, 
                              manage databases, and ensure efficient data handling using Node.js and MongoDB.
                           </p>
                           <Link to="/Projects" className={`${style.linkServices} main-color position-absolute bottom-0 end-0 mx-3 my-4`}>
                              Check Projects <i className={`${style.iconServices} fa-solid fa-angle-right mx-2`}></i>
                           </Link>
                     </div>
                  </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 cardAnimation">
                     <div className={`card rounded-0 position-relative`} style={{height:500}}>
                        <div className={`${style.imgServices} overflow-hidden`}>
                           <img src="/home_three.jpg" className={`${style.photoService}  rounded-0 w-100 h-100 img-fluid object-fit-cover`}alt="title" />
                        </div>
                        <div className="card-body">
                           <h5 className="card-title mb-3">Full Stack Projects</h5>
                           <p className="small text-muted mb-4">
                              I combine frontend and backend expertise to deliver
                              complete web solutions using the MERN stack, from user interfaces to server logic.
                           </p>
                           <Link to="/Projects" className={`${style.linkServices} main-color position-absolute bottom-0 end-0 mx-3 my-4`}>
                              Check Projects <i className={`${style.iconServices} fa-solid fa-angle-right mx-2`}></i>
                           </Link>
                     </div>
                  </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 cardAnimation">
                     <div className={`card rounded-0 position-relative`} style={{height:500}}>
                        <div className={`${style.imgServices} overflow-hidden`}>
                           <img src="/home_one.jpg" className={`${style.photoService}  rounded-0 w-100 h-100 img-fluid object-fit-cover`}alt="title" />
                        </div>
                        <div className="card-body">
                           <h5 className="card-title mb-3">E-commerce & Online Stores</h5>
                           <p className="small text-muted mb-4">
                              I build full-featured online stores, 
                              including product pages, shopping carts,
                              and payment integration for seamless transactions.
                           </p>
                           <Link to="/Projects" className={`${style.linkServices} main-color position-absolute bottom-0 end-0 mx-3 my-4`}>
                              Check Projects <i className={`${style.iconServices} fa-solid fa-angle-right mx-2`}></i>
                           </Link>
                     </div>
                  </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 cardAnimation">
                     <div className={`card rounded-0 position-relative`} style={{height:500}}>
                        <div className={`${style.imgServices} overflow-hidden`}>
                           <img src="/home_three.jpg" className={`${style.photoService}  rounded-0 w-100 h-100 img-fluid object-fit-cover`}alt="title" />
                        </div>
                        <div className="card-body">
                           <h5 className="card-title mb-3">Portfolio & Personal Projects</h5>
                           <p className="small text-muted mb-4">
                              I create personal and experimental projects to explore new ideas, 
                              showcase my skills, and implement creative web solutions.
                           </p>
                           <Link to="/Projects" className={`${style.linkServices} main-color position-absolute bottom-0 end-0 mx-3 my-4`}>
                              Check Projects <i className={`${style.iconServices} fa-solid fa-angle-right mx-2`}></i>
                           </Link>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </section>

         <section className={`${style.skills}`}>
            <div className="container">
               <div className={`text-center ${style.fadeUp}`}>
                  <h3 className='fw-bold titleAnimation text-muted'>Skills</h3>
                  <p className="text-muted small titleAnimation">Technologies & tools I have worked with</p>
               </div>
               <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
                  <div className="row">
                     <SkillSection title="Frontend" items={skills.frontend} />
                     <SkillSection title="Backend" items={skills.backend} />
                     <SkillSection title="Server Security" items={skills.security} />
                     <SkillSection title="Tools" items={skills.tools} />
                     <SkillSection title="PDF & Documents" items={skills.pdf} />
                     <SkillSection title="Payments" items={skills.payments} />
                     <SkillSection title="Other" items={skills.other} />
                  </div>
               </div>
            </div>
         </section>

         <section className={`${style.statistics} py-2 position-relative`}>
            <div className="container my-5 py-5">
               <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
                  <div className='text-center m-5' style={{width:300}}>
                     <div className=''>
                           <svg xmlns="http://www.w3.org/2000/svg"  fill="#3c673a" width="50" height="50" viewBox="0 0 24 32"><path d="M15.35 19.87v-.193c-.924.538-2.001.813-3.21.813s-2.265-.274-3.19-.813v.193l3.19 2.408zM19.18 9.945c0-.102-.03-.579-.64-.579h-.63s.122-3.586-1.829-5.161c-.416.813-1.737 1.778-4.927 1.564s-4.064.508-4.419 1.087c-.132.691-.386 2.509-.386 2.509H5.76l-.031-.001a.61.61 0 00-.609.578v.001a.65.65 0 00.639.65H6.4s-.477 8.635 5.74 8.635 5.75-8.635 5.75-8.635h.65a.65.65 0 00.64-.65zm-4.206 5.354v.03a2.85 2.85 0 01-2.58 1.646h-.012.001a3.211 3.211 0 01-.733-.086l.022.004h-.02a.62.62 0 01-.446-.746l-.001.004c0-.02.01-.02.01-.03h.01a.62.62 0 01.756-.456l-.004-.001h.01a1.585 1.585 0 001.814-.854l.004-.01a.641.641 0 01.858-.313l-.004-.002a.62.62 0 01.313.817l.002-.004z"></path><path d="M5.161 8.137a.141.141 0 00.091-.132c.051-.752-.01-4.043 5.973-3.484 3.19.295 3.708-.742 3.779-1.036.264-.711.752-.772 1.067-.701.166.031.313.095.44.185l-.003-.002c2.326 1.534 2.53 4.754 2.58 5.161h.03c2.093-5.445-1.077-6.166-2.458-6.339l-.457-.071s.254-2.692-4.937-1.331c-1.382.356-3.86.63-5.608.102a.253.253 0 00-.325.212v.001c-.081.63-.061 1.443.498 1.666l.61.234a.339.339 0 01.192.181l.001.002a.366.366 0 01-.18.487l-.002.001-.599.264c-.792.325-2.123 1.768-.884 4.521a.153.153 0 00.194.081h-.001zM17.534 21.171l-1.605-.67-3.119 2.438 1.443 1.432 3.281-3.2zM6.766 21.171l1.605-.67 3.119 2.438-1.453 1.432-3.271-3.2zM18.418 21.506l-3.637 3.637c-.792.67-1.453-.102-1.453-.102a1.03 1.03 0 01-.211.211l-.003.002 1.544 4.714a.975.975 0 01-.154.866l.002-.003-.914 1.158h10.707v-6.075c0-2.499-1.128-3.119-5.882-4.409zM9.641 29.968l1.534-4.704a1.344 1.344 0 01-.222-.202l-.001-.001s-.61.782-1.432.081l-3.637-3.627c-4.754 1.29-5.882 1.91-5.882 4.419v6.065h10.697l-.904-1.158a.97.97 0 01-.151-.88l-.002.007zM10.9 30.202l1.25 1.615 1.25-1.615-1.25-3.83-1.25 3.83z"></path></svg>
                     </div>
                     <div>
                        <h4 className='my-4'><Counter target={10} /></h4>
                        <p className={`${style.textStatistics} text-muted main-color small position-relative`}>Happy Clients</p>
                     </div>
                  </div>

                  <div className='text-center m-5' style={{width:300}}>
                     <div className=''>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="#3c673a" width="50" height="50" viewBox="0 0 32 32"><path d="M16 22.688c3.688 0 6.688-3 6.688-6.688s-3-6.688-6.688-6.688-6.688 3-6.688 6.688 3 6.688 6.688 6.688zm-4-20h8l2.438 2.625h4.25c1.438 0 2.625 1.25 2.625 2.688v16c0 1.438-1.188 2.688-2.625 2.688H5.313c-1.438 0-2.625-1.25-2.625-2.688v-16c0-1.438 1.188-2.688 2.625-2.688h4.25zM11.75 16c0-2.375 1.875-4.25 4.25-4.25s4.25 1.875 4.25 4.25-1.875 4.25-4.25 4.25-4.25-1.875-4.25-4.25z"></path></svg>
                     </div>
                     <div>
                        <h4 className='my-4'><Counter target={12} /></h4>
                        <p className={`${style.textStatistics} text-muted main-color small position-relative`}>Projects Completed</p>
                     </div>
                  </div>

                  <div className='text-center m-5' style={{width:300}}>
                     <div className=''>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="#3c673a"  width="50" height="50" viewBox="0 0 34 32"><path d="M8.811 6.023V3.235a.926.926 0 111.852 0v2.788a.926.926 0 11-1.852 0zM25.497 6.023V3.235a.926.926 0 111.852 0v2.788a.926.926 0 11-1.852 0z"></path><path d="M31.989 10.663H4.172V6.492c0-.766.618-1.388 1.382-1.394h2.321v.926a1.864 1.864 0 003.714.007v-.933h12.983v.926a1.852 1.852 0 103.704 0v-.926h2.32a1.394 1.394 0 011.383 1.394v4.171zM26.144 16.229h.013c1.039 0 1.969.466 2.593 1.2l.004.005A3.387 3.387 0 0132.01 16.3l-.022-.004v-4.707H4.171v19.017c0 .766.618 1.388 1.382 1.394h25.052a1.394 1.394 0 001.383-1.394v-5.61c-.547.457-1.115.87-1.628 1.249-.494.343-.919.673-1.327 1.022l.022-.018a.444.444 0 01-.624 0 14.267 14.267 0 00-1.256-.972l-.049-.032c-1.863-1.338-4.406-3.179-4.406-6.514v-.045a3.457 3.457 0 013.411-3.457h.002zM13.63 25.341a3.66 3.66 0 01-2.321.624l.011.001a5.258 5.258 0 01-2.265-.437l.034.013v-1.149c.305.154.662.288 1.034.382l.037.008c.324.085.696.134 1.079.134h.003a2.299 2.299 0 001.393-.352l-.009.006a1.249 1.249 0 00.457-1.064v.004l.002-.066c0-.37-.201-.694-.499-.868l-.005-.003a3.181 3.181 0 00-1.594-.301l.01-.001h-.692v-1.026h.703c1.26 0 1.896-.435 1.896-1.316.002-.02.002-.043.002-.067 0-.29-.13-.55-.336-.724l-.001-.001a1.529 1.529 0 00-.986-.279h.003c-.31 0-.609.049-.89.14l.02-.006c-.379.13-.707.3-1.005.51l.013-.008-.625-.892a4.131 4.131 0 012.547-.803h-.004a2.984 2.984 0 011.884.52l-.01-.007c.409.313.671.801.671 1.351l-.002.081v-.004l.001.05c0 .463-.169.887-.449 1.213l.002-.002c-.319.346-.744.59-1.224.678l-.014.002v.045c.556.031 1.055.25 1.441.593l-.002-.002a1.7 1.7 0 01.481 1.188l-.002.076v-.004a2.104 2.104 0 01-.788 1.759l-.004.003zm4.796.513h-1.283v-5.131c0-.613.011-1.093.045-1.461l-.301.29-1.216 1.004-.647-.814 2.342-1.84h1.071z"></path><path d="M33.852 19.709a5.405 5.405 0 01-1.715 3.89l-.003.003h-.011c-.714.736-1.562 1.338-2.309 1.885-.379.279-.747.535-1.071.803a27.15 27.15 0 00-1.082-.803c-1.796-1.294-4.026-2.9-4.026-5.766v-.05a2.498 2.498 0 014.689-1.201l.007.013a.491.491 0 00.66.155l-.002.001a.432.432 0 00.155-.154l.001-.002a2.503 2.503 0 012.185-1.316h.001l.055-.001c.315 0 .614.066.885.185l-.014-.006h.011a2.56 2.56 0 011.584 2.363v.002zM16.229.926a.926.926 0 11-1.852 0 .926.926 0 011.852 0zM1.852 28.286a.926.926 0 11-1.852 0 .926.926 0 011.852 0z"></path></svg>
                     </div>
                     <div>
                        <h4 className='my-4'><Counter target={782} /></h4>
                        <p className={`${style.textStatistics} text-muted main-color small position-relative`}>Working Days</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className={`${style.testimonials} py-5`}>
            <div className="container">
               <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                  {/* Indicators */}
                  <div className={`${style.customIndicators} carousel-indicators`}>
                     <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                     <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                     <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                  {/* Slides */}
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className={`${style.cardCarousel}`}>
                           <div className='bg-white rounded-1 p-4'>
                              <p className="text-muted text-center small py-4">
                                    I was extremely impressed with the project. Delivery was on time, 
                                    and the entire process felt smooth and professional. The website quality is top-notch,
                                    secure, and easy to navigate. Pricing is fair for such a high-quality service.
                                    I am very satisfied with the speed and the elegant design.
                              </p>

                              <div className="d-flex justify-content-start align-items-center">
                                 <div className={`${style.imgTestimonials} overflow-hidden mx-2`}>
                                    <img src="/testimonial1.jpg" className="w-100 h-100" alt="" />
                                 </div>

                                 <div className="mx-2">
                                    <h6 className="m-0 p-0 main-color fw-bold">Mahmoud Amin</h6>
                                    <p className="text-muted small m-0 p-0 main-color">
                                       Innovative, Secure, Fast, Professional, Elegant, Reliable
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="carousel-item">
                        <div className={`${style.cardCarousel}`}>
                           <div className='bg-white rounded-1 p-4'>
                              <p className="text-muted text-center small py-4">
                                 Absolutely amazing experience! The project was handled with great professionalism and attention to detail.
                                 Everything was delivered promptly, the site is secure and visually appealing, and the speed of execution is remarkable.
                                 The pricing is reasonable, and I highly recommend their service."
                              </p>

                              <div className="d-flex justify-content-start align-items-center">
                                 <div className={`${style.imgTestimonials} overflow-hidden mx-2`}>
                                    <img src="/testimonial2.jpg" className="w-100 h-100" alt="" />
                                 </div>

                                 <div className="mx-2">
                                    <h6 className="m-0 p-0 main-color fw-bold">Walid Fathy</h6>
                                    <p className="text-muted small m-0 p-0 main-color">
                                       User-friendly, Efficient, Modern, Stable, Affordable, Attractive
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="carousel-item ">
                        <div className={`${style.cardCarousel}`}>
                           <div className='bg-white rounded-1 p-4'>
                              <p className="text-muted text-center small py-4">
                                 "From start to finish, the process was seamless. The website is well-designed, secure, 
                                 and extremely user-friendly. Delivery times were strictly followed,
                                 and the professionalism shown was outstanding. The service is fast, 
                                 reliable, and reasonably priced. 
                                 I couldn’t be happier with the results.
                              </p>

                              <div className="d-flex justify-content-start align-items-center">
                                 <div className={`${style.imgTestimonials} overflow-hidden mx-2`}>
                                    <img src="/testimonial3.png" className="w-100 h-100" alt="" />
                                 </div>

                                 <div className="mx-2">
                                    <h6 className="m-0 p-0 main-color fw-bold">Ahmed Khalil </h6>
                                    <p className="text-muted small m-0 p-0 main-color">
                                       Robust, Intuitive, Stylish, High-quality, Flexible, Accurate
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Controls */}
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true" />
                     <span className="visually-hidden">Previous</span>
                  </button>

                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true" />
                     <span className="visually-hidden">Next</span>
                  </button>
               </div>
            </div>
         </section>

         <section className={`${style.contact} py-5`}>
            <div className="container my-5 py-5">
               <div className='d-flex justify-content-evenly align-items-center px-5  flex-column flex-md-row '>
                  <div className="text-center text-lg-start w-100 w-md-auto mx-0 mx-md-5 px-0 px-md-5">
                     <p className='p-0 m-0 h3 fw-bold text-muted'>You already know about me, now let me know about you. Contact me and get quality services!</p>
                  </div>
                  <div className="text-end my-4">
                     <Link to="/Contact" className={`${style.linkContent} btn text-white py-2 px-4 rounded-0`}>CONTACT</Link>
                  </div>
               </div>
            </div>
         </section>

         <section className={`${style.postContact} py-5`}></section>
      </Fragment>
   );
}


