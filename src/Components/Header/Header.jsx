import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from "./header.module.css" ;
import TypingEffect from '../TypingEffect/TypingEffect.jsx';


export default function Header() {
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
            <nav className={`${style.header} `}>

               {/* Navbar Links */}
               <div className={`${style.links} ${displayScrollNavbar ? style.linksActive : ""}  fixed-top`}>

                  {/* Navbar Btn Mobile Screen */}
                  <button className={`${style.menuBtn}  ${isOpen?style.active: ""} position-absolute btn d-none`} onClick={() => {setIsOpen(!isOpen)}}>
                     <span className={`${style.menuIcon}`}></span>
                  </button>
                  <div className={`${style.mobileLink} ${isOpen?"":"d-none"} text-center p-3 bg-white position-absolute w-100 top-0 start-0`}>
                     <ul >
                        <li className="my-3"><NavLink className={({isActive}) => `text-black ${isActive ? ' fw-bold':''}`} to="/">Home</NavLink></li>
                        <li className="my-3"><NavLink className={({isActive}) => `text-black ${isActive ? ' fw-bold':''}`} to="/about">About</NavLink></li>
                        <li className="my-3"><NavLink className={({isActive}) => `text-black ${isActive ? ' fw-bold':''}`} to="/projects">Projects</NavLink></li>
                        <li className="my-3"><NavLink className={({isActive}) => `text-black ${isActive ? ' fw-bold':''}`} to="/testimonials">Testimonials</NavLink></li>
                     </ul>
                  </div>


                  {/* Navbar Large Screen */}
                  <ul className={`${style.largeScreenLinks} d-flex justify-content-end align-items-center`}>
                     <li className="mx-2"><NavLink className={({isActive}) => `${style.link} ${isActive ? ' fw-bold':''}`} to="/">Home</NavLink></li>
                     <li className="mx-2"><NavLink className={({isActive}) => `${style.link} ${isActive ? ' fw-bold':''}`} to="/about">About</NavLink></li>
                     <li className="mx-2"><NavLink className={({isActive}) => `${style.link} ${isActive ? ' fw-bold':''}`} to="/projects">Projects</NavLink></li>
                     <li className="mx-2"><NavLink className={({isActive}) => `${style.link} ${isActive ? ' fw-bold':''}`} to="/testimonials">Testimonials</NavLink></li>
                  </ul>
               </div>

                  {/* Header Information */}
               <div className='d-flex justify-content-center align-items-center w-100 h-100 text-center'>
                  <div className=''>
                     <h1 className={`fw-bold mb-0 ${style.title}`}>Mahmoud Othman</h1>
                     {/* <p className='mt-0'>Full Stack Developer</p> */}
                           <TypingEffect texts={["MERN Stack Developer","Front-End Developer | UI/UX & React.js", "Back-End Developer | Node.js & Architecture","Database Management | MongoDB"]} speed={100} delay={3000} />
                  </div>
               </div>
            </nav>


            {/* Button Top Level */}
            <div className={`${style.scrollDiv} text-end  fixed-bottom`}>
               <button onClick={scrollToTop} className={` ${style.scrollBtn}   ${displayScrollBtn ? "" : " d-none"} btn m-3 rounded-0`}>
                  <i className="fa-solid fa-chevron-up"></i>
               </button>
            </div>


            {/* WhatsApp */}
            <div className="text-start  fixed-bottom">
               <Link  to={`https://wa.me/201126999142`} className={`btn m-2`}>
                  <img src="/WhatsApp.png" alt="" className={`${style.whatsApp}`} />
               </Link>
            </div>

         </section>
      </Fragment>



      // <div className="container-fluid">
      //    <nav className={`${style.header}`}>
               // <button className={`${style.menuBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
               //    <span className={`${style.menuIcon}`}></span>
               // </button>

               // <button  className={`${style.menuBtn} ${isOpen ? "active" : ""}`} 
               //       onClick={() => setIsOpen(!isOpen)}
               //       type="button"
               //       data-bs-toggle="collapse"
               //       data-bs-target="#navMenu"
               //    >
               //    <span className="menu-icon"></span>
               // </button>

      //          <div className="">
      //             <ul className={`${style.link}`}>
      //                <li className=""><NavLink className={({isActive}) => `nav-link ${isActive ? 'active fw-bold':''}`} to="/">Home</NavLink></li>
      //                <li className=""><NavLink className={({isActive}) => `nav-link ${isActive ? 'active fw-bold':''}`} to="/about">About</NavLink></li>
      //                <li className=""><NavLink className={({isActive}) => `nav-link ${isActive ? 'active fw-bold':''}`} to="/projects">Projects</NavLink></li>
      //                <li className=""><NavLink className={({isActive}) => `nav-link ${isActive ? 'active fw-bold':''}`} to="/testimonials">Testimonials</NavLink></li>
      //                <li className=" ms-3"><a className="btn btn-primary" href="mailto:mahmoud@example.com">Whats App</a></li>
      //             </ul>
      //          </div>
      //    </nav>
      // </div>
   );
}