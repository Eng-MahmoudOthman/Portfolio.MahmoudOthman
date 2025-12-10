import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from "./header.module.css" ;
import TypingEffect from '../TypingEffect/TypingEffect.jsx';


export default function Header({title , typing , subTitle , backgroundURL , color , titleColor , linksColor}) {
   const [displayScrollNavbar, setDisplayScrollNavbar] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [displayScrollBtn, setDisplayScrollBtn] = useState(false);


   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
         });
   };


   useEffect(() => {
      const handleScroll = () => {
         setDisplayScrollNavbar(window.scrollY > 20);
         setDisplayScrollBtn(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <Fragment>
         <section className={`${style.sectionHeader} position-relative`}>

            {/* Navbar Links */}
            <nav className={`${style.header}`} style={backgroundURL} >

               {/* Navbar Links */}
               <div className={`${style.links} ${displayScrollNavbar ? `${style.linksActive} ${linksColor} ${color? "bg-black":"text-white"} `: ""}  fixed-top`}>

                  {/* Navbar Btn Mobile Screen */}
                  <button className={`${style.menuBtn}  ${isOpen?`${style.active}`: ""} position-absolute btn d-none`} onClick={() => {setIsOpen(!isOpen)}}>
                     <i className={`fa-solid fa-bars text-black fs-4 ${color}`}></i>
                  </button>
                  <div className={`${style.mobileLink} ${isOpen?"":"d-none"} text-center p-3  ${isOpen?"bg-black":"bg-white"}   position-absolute w-100 top-0 start-0`}>
                     <ul >
                        <li className="my-3"><NavLink className={({isActive}) => `${isOpen?"text-white":"text-black"}  ${isActive ? ' fw-bold':''}`} to="/">Home</NavLink></li>
                        <li className="my-3"><NavLink className={({isActive}) => `${isOpen?"text-white":"text-black"}  ${isActive ? ' fw-bold':''}`} to="/projects">Projects</NavLink></li>
                        <li className="my-3"><NavLink className={({isActive}) => `${isOpen?"text-white":"text-black"}  ${isActive ? ' fw-bold':''}`} to="/Contact">Contact</NavLink></li>
                     </ul>
                  </div>


                  {/* Navbar Large Screen */}
                  <ul className={`${style.largeScreenLinks} d-flex justify-content-end align-items-center`}>
                     <li className="mx-2"><NavLink className={({isActive}) => `text-black ${color} ${style.link} ${isActive ? ' fw-bold':''}`} to="/">Home</NavLink></li>
                     <li className="mx-2"><NavLink className={({isActive}) => `text-black ${color} ${style.link} ${isActive ? ' fw-bold':''}`} to="/projects">Projects</NavLink></li>
                     <li className="mx-2"><NavLink className={({isActive}) => `text-black ${color} ${style.link} ${isActive ? ' fw-bold':''}`} to="/Contact">Contact</NavLink></li>
                  </ul>
               </div>

                  {/* Header Information */}
               <div className='d-flex justify-content-center align-items-center w-100 h-100 text-center '>
                  <div className='text-muted '>
                     <h1 className={`fw-bold mb-0 ${titleColor}  ${style.title}`}>{title}</h1>
                     {subTitle?<p className={`text-center small ${color}`}>{subTitle}</p>:""}
                     {typing?<TypingEffect texts={typing} speed={100} delay={3000} />:""}
                  </div>
               </div>
            </nav>


            {/* Button Top Level */}
            <div className={`${style.scrollDiv} d-flex justify-content-between align-items-center fixed-bottom`}>
               <Link  to={`https://wa.me/201126999142`} className={`btn mb-1`}>
                  <img src="/WhatsApp.png" alt="" className={`${style.whatsApp}`} />
               </Link>
               <button onClick={scrollToTop} className={` ${style.scrollBtn}   ${displayScrollBtn ? "" : " d-none"} btn m-3 rounded-0`}>
                  <i className="fa-solid fa-chevron-up "></i>
               </button>
            </div>


            {/* WhatsApp */}
            {/* <div className="text-start  fixed-bottom">
               <Link  to={`https://wa.me/201126999142`} className={`btn m-2`}>
                  <img src="/WhatsApp.png" alt="" className={`${style.whatsApp}`} />
               </Link>
            </div> */}

         </section>
      </Fragment>
   );
}