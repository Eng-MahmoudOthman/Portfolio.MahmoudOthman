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

            {/* Commerical Photography */}
            <section className={`${style.Photography}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Commerical Photography</h3>
                        <p className="text-muted small titleAnimation">
                           Photography is what I admire most of all. It's in my blood and it's a lifestyle. Whether it's for commercial or individual use I will capture the best angles of the target.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">
                        <div className="col-md-4">
                           <div className="row g-4">
                              <Link to="http://localhost:3000/Store-App_Front-End#/" target="_blank">
                                 <div className="col-md-12 ">
                                    <div className='overflow-hidden rounded'>
                                       <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                    </div>
                                 </div>
                              </Link>
                              <div className="col-md-12"  >
                                 <div className='overflow-hidden rounded'>
                                    <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div  className="row g-4">
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>

                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </section>




            {/* Graphic Design */}
            <section className={`${style.Graphic}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Graphic Design</h3>
                        <p className="text-muted small titleAnimation">
                           The worldwide digital reality made it inevitable to integrate me into this field full of creativity. The mixture of photography and graphic art is the best way to express my most fantasy ideas. There is still a bunch of unique ideas in my head, that needs to be realized.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">
                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12 ">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12"  >
                                 <div className='overflow-hidden rounded'>
                                    <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>

                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </section>




            {/* Branding */}
            <section className={`${style.Branding}`}>
               <div className='container'>
                     <div className="text-center">
                        <h3 className="fw-bold titleAnimation text-muted">Branding</h3>
                        <p className="text-muted small titleAnimation">
                           My skills in branding is a pure example of how a hobby can grow into a profession. Exploring your product and providing with a decision-making-shortcut is nothing but fun for me.
                        </p>
                     </div>

                     <div className="row g-4 my-4 ">
                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12 ">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/one.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12"  >
                                 <div className='overflow-hidden rounded'>
                                    <img src="/four.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="row g-4">
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/two.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/five.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="col-md-4">
                           <div  className="row g-4">
                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/three.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>

                              <div className="col-md-12">
                                 <div className='overflow-hidden rounded'>
                                    <img src="/six.jpg" className={`${style.image} cardAnimation img-fluid rounded`} alt="" />
                                 </div>
                              </div>
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