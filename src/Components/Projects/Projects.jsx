import React, { Fragment , useEffect } from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.jsx';
import Header from '../Header/Header.jsx';
import style from "./projects.module.css"
import useAnimation from '../../Hooks/useAnimation.js';
import { Link } from 'react-router-dom';


export default function Projects() {
   useAnimation(".cardAnimation ", "showAnimation");
   useAnimation(".titleAnimation " , style.fadeUp);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }, [])

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
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/Store-App_Front-End/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="E-COMMERCE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>

                              <Link to="https://eng-mahmoudothman.github.io/DANIELS_PROJECT/" target="_blank">
                                 <div className="col-md-12"  >
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="DANIELS PROJECT " >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://store-alborg-lab-front-end-vercel.vercel.app/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="STORE APP PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_AlborgLab_Front-End-vercel"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_Alborglab_App_Back-End"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div  className="row g-4">
                              <Link to="https://sm-trend.com/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="BOOKING SYSTEM PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Front-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Back-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="https://eng-mahmoudothman.github.io/Simple-Crud/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="Simple Crud js Native" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Simple-Crud"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>
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
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/TEMPLATE_ONE_PROJECT/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="TEMPLATE ONE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/TEMPLATE_ONE_PROJECT"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>

                              <Link to="https://eng-mahmoudothman.github.io/free-palestine-Front-End/" target="_blank">
                                 <div className="col-md-12"  >
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="FREE PALESTINE APP PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/https://github.com/Eng-MahmoudOthman/free-palestine-Front-End"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/TEMPLATE_TWO_PROJECT/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="TEMPLATE TWO PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/TEMPLATE_TWO_PROJECT"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>

                              <Link to="https://eng-mahmoudothman.github.io/TEMPLATE_THREE_PROJECT/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="TEMPLATE THREE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/TEMPLATE_THREE_PROJECT"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/Store-App_Front-End/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="E-COMMERCE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store-App_Front-End"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="https://store-alborg-lab-front-end-vercel.vercel.app/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="STORE APP PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_AlborgLab_Front-End-vercel"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          {/* <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link> */}
                                       </div>
                                       <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>
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
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="/" target="_blank">
                                 <div className="col-md-12"  >
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>

                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              

                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>
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
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://sm-trend.com/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="BOOKING SYSTEM (TREND)" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Front-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Back-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="https://store-alborg-lab-front-end-vercel.vercel.app/" target="_blank">
                                 <div className="col-md-12"  >
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="STORE APP PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_AlborgLab_Front-End-vercel"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_Alborglab_App_Back-End"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://sm-trend.com/#/onlinesystem" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="MEDICAL APPROVALS PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Front-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Back-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="https://eng-mahmoudothman.github.io/free-palestine-Front-End/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="FREE PALESTINE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/free-palestine-Front-End"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/free-palestine-Back-End"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/Store-App_Front-End/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="E-COMMERCE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store-App_Front-End"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store-App_Back-End-vercel"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="https://eng-mahmoudothman.github.io/E-Commerce_Front-End/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="E-COMMERCE SHOPPING" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/E-Commerce_Front-End"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/E-Commerce_app-Back-End-"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>
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
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/Store-App_Front-End/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="E-COMMERCE PROJECT" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store-App_Front-End"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store-App_Back-End-vercel"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="/" target="_blank">
                                 <div className="col-md-12"  >
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://store-alborg-lab-front-end-vercel.vercel.app/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="STORE APP ALBORG" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_AlborgLab_Front-End-vercel"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Store_Alborglab_App_Back-End"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div  className="row g-4">
                              <Link to="https://sm-trend.com/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="BOOKING SYSTEM (TREND)" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Front-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Trend_Back-End_v1"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>
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
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://portfoliomahmoud-othman.vercel.app/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="MAHMOUD OTHMAN" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/Portfolio.MahmoudOthman"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>

                              <Link to="/" target="_blank">
                                 <div className="col-md-12"  >
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/KERRI_PROJECT/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="KERRI" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/KERRI_PROJECT"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              
                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <Link to="https://eng-mahmoudothman.github.io/DANIELS_PROJECT/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="DANIELS" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="https://github.com/Eng-MahmoudOthman/DANIELS_PROJECT"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>

                              <Link to="/" target="_blank">
                                 <div className="col-md-12">
                                    <div className={`overflow-hidden rounded  position-relative  ${style.imgContainer}`} data-before="PROJECT NAME" >
                                       <div className={`${style.linkGithub}`}>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Front-End</Link>
                                          <Link className={`${style.link}`} to="/"><i className="fa-brands fs-6 fa-github"></i>  Back-End</Link>
                                       </div>
                                       <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </div>
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