import React, { Fragment , useEffect } from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.jsx';
import Header from '../Header/Header.jsx';
import style from "./projects.module.css"
import useAnimation from '../../Hooks/useAnimation.js';
import { Link } from 'react-router-dom';
import projects from "../../data/projects.json";


export default function Projects() {
   useAnimation(".cardAnimation ", "showAnimation");
   useAnimation(".titleAnimation " , style.fadeUp);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }, []);








   return (
      <Fragment>
         <Header title={"Projects"} titleColor={"text-white"} subTitle={"Welcome to explore my Projects"} backgroundURL={{backgroundImage: `url("/backgroundProject.jpg")`}} color={"text-white"}/>
            <CustomTitle title="Projects" />


            {/* Web Applications  */}
            <section className={`${style.Branding}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Web Applications</h3>
                        <p className="text-muted small titleAnimation">
                           I build interactive web applications with dynamic features and smooth user experience. 
                           These include dashboards, content management systems, and business tools.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">
                        {projects.webApp.map(project => (
                           <div className="col-md-4 cardAnimation">
                              <Link to={project.demoUrl} target="_blank">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before={project.name} >
                                       <div className={`${style.linkGithub}`}>
                                             {project.frontUrl? <Link className={`${style.link} me-0`} target="_blank" to={project.frontUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Front-End</Link>:""}
                                             {project.backUrl? <Link className={`${style.link} ms-0 me-5`} target="_blank" to={project.backUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Back-End</Link>:""}
                                             <Link className={`${style.link}`}  to={`/projects/${project.category}/${project.slug}`}>More Details <i class="fa-solid fa-right-long ms-1"></i> </Link>
                                       </div>
                                       <img src={project.imageUrl} className={`${style.image}  img-fluid`} alt="imageCover" />
                                    </div>
                              </Link>
                           </div>
                        ))}
                     </div>
               </div>
            </section>


            {/* Frontend Development  */}
            <section className={`${style.Graphic}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Frontend Development</h3>
                        <p className="text-muted small titleAnimation">
                           I create responsive and visually appealing 
                           user interfaces using React.js, HTML, CSS, and JavaScript, 
                           focusing on usability and performance.
                        </p>
                     </div>
                     <div className="row g-4 my-4 ">
                        {projects.front.map(project => (
                           <div className="col-md-4 cardAnimation">
                              <Link to={project.demoUrl} target="_blank">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before={project.name} >
                                       <div className={`${style.linkGithub}`}>
                                             {project.frontUrl? <Link className={`${style.link} me-0`} target="_blank" to={project.frontUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Front-End</Link>:""}
                                             {project.backUrl? <Link className={`${style.link} ms-0 me-5`} target="_blank" to={project.backUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Back-End</Link>:""}
                                             <Link className={`${style.link}`}  to={`/projects/${project.category}/${project.slug}`}>More Details <i class="fa-solid fa-right-long ms-1"></i> </Link>
                                       </div>
                                       <img src={project.imageUrl} className={`${style.image}  img-fluid`} alt="imageCover" />
                                    </div>
                              </Link>
                           </div>))
                        }
                     </div>
               </div>
            </section>




            {/* Backend Development */}
            <section className={`${style.Branding}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Backend Development</h3>
                        <p className="text-muted small titleAnimation">
                           I develop robust server-side applications and APIs, 
                           manage databases, and ensure efficient data handling using Node.js and MongoDB.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">
                        {projects.back.map(project => (
                           <div className="col-md-4 cardAnimation">
                              <Link to={project.demoUrl} target="_blank">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before={project.name} >
                                       <div className={`${style.linkGithub}`}>
                                             {project.frontUrl? <Link className={`${style.link} me-0`} target="_blank" to={project.frontUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Front-End</Link>:""}
                                             {project.backUrl? <Link className={`${style.link} ms-0 me-5`} target="_blank" to={project.backUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Back-End</Link>:""}
                                             <Link className={`${style.link}`}  to={`/projects/${project.category}/${project.slug}`}>More Details <i class="fa-solid fa-right-long ms-1"></i> </Link>
                                       </div>
                                       <img src={project.imageUrl} className={`${style.image}  img-fluid`} alt="imageCover" />
                                    </div>
                              </Link>
                           </div>
                        ))}
                     </div>
               </div>
            </section>




            {/* Full Stack Projects */}
            <section className={`${style.Graphic}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Full Stack Projects</h3>
                        <p className="text-muted small titleAnimation">
                           I combine frontend and backend expertise to deliver
                           complete web solutions using the MERN stack, from user interfaces to server logic.
                        </p>
                     </div>
                     <div className="row g-4 my-4 ">
                        {projects.fullStack.map(project => (
                           <div className="col-md-4 cardAnimation">
                              <Link to={project.demoUrl} target="_blank">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before={project.name} >
                                       <div className={`${style.linkGithub}`}>
                                             {project.frontUrl? <Link className={`${style.link} me-0`} target="_blank" to={project.frontUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Front-End</Link>:""}
                                             {project.backUrl? <Link className={`${style.link} ms-0 me-5`} target="_blank" to={project.backUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Back-End</Link>:""}
                                             <Link className={`${style.link}`}  to={`/projects/${project.category}/${project.slug}`}>More Details <i class="fa-solid fa-right-long ms-1"></i> </Link>
                                       </div>
                                       <img src={project.imageUrl} className={`${style.image}  img-fluid`} alt="imageCover" />
                                    </div>
                              </Link>
                           </div>
                        ))}
                     </div>
               </div>
            </section>




            {/* E-commerce & Online Stores */}
            <section className={`${style.Branding}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">E-commerce & Online Stores</h3>
                        <p className="text-muted small titleAnimation">
                           I build full-featured online stores, 
                           including product pages, shopping carts,
                           and payment integration for seamless transactions.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">
                        {projects.onlineStore.map(project => (
                           <div className="col-md-4 cardAnimation">
                              <Link to={project.demoUrl} target="_blank">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before={project.name} >
                                       <div className={`${style.linkGithub}`}>
                                             {project.frontUrl? <Link className={`${style.link} me-0`} target="_blank" to={project.frontUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Front-End</Link>:""}
                                             {project.backUrl? <Link className={`${style.link} ms-0 me-5`} target="_blank" to={project.backUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Back-End</Link>:""}
                                             <Link className={`${style.link}`}  to={`/projects/${project.category}/${project.slug}`}>More Details <i class="fa-solid fa-right-long ms-1"></i> </Link>
                                       </div>
                                       <img src={project.imageUrl} className={`${style.image}  img-fluid`} alt="imageCover" />
                                    </div>
                              </Link>
                           </div>
                        ))}
                     </div>
               </div>
            </section>




            {/* Portfolio & Personal Projects */}
            <section className={`${style.Graphic}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Portfolio & Personal Projects</h3>
                        <p className="text-muted small titleAnimation">
                           I create personal and experimental projects to explore new ideas, 
                           showcase my skills, and implement creative web solutions.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">


                        {projects.portfolio.map(project => (
                           <div className="col-md-4 cardAnimation">
                              <Link to={project.demoUrl} target="_blank">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before={project.name} >
                                       <div className={`${style.linkGithub}`}>
                                             {project.frontUrl? <Link className={`${style.link} me-0`} target="_blank" to={project.frontUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Front-End</Link>:""}
                                             {project.backUrl? <Link className={`${style.link} ms-0 me-5`} target="_blank" to={project.backUrl}><i className="fa-brands fs-6 fa-github me-1"></i>  Back-End</Link>:""}
                                             <Link className={`${style.link}`}  to={`/projects/${project.category}/${project.slug}`}>More Details <i class="fa-solid fa-right-long ms-1"></i> </Link>
                                       </div>
                                       <img src={project.imageUrl} className={`${style.image}  img-fluid`} alt="imageCover" />
                                    </div>
                              </Link>
                           </div>
                        ))}
                     </div>
               </div>
            </section>




            {/* Contact */}
            <section className={`${style.Contact} d-flex justify-content-center align-items-center`}>
               <div className='container '>
                  <div className="text-center">
                     <h2 className="fw-bold text-muted">Hire Me</h2>
                     <Link to="/Contact"><button className={`btn rounded-0 text-white bg-main px-4 py-2 ${style.btnContact}`}>Contact</button></Link>
                  </div>
               </div>
            </section>
      </Fragment>
   );
}