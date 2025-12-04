import React from 'react';
import { Link } from "react-router-dom";
import style from "./footer.module.css"



export default function Footer() {
   return (
      <footer className={`${style.sectionFooter} py-2 bg-dark text-white`}>
         <div className="container ">
            <div className="row justify-content-between align-items-center text-center">
               <div className="col-md-6">
                  <div className={`${style.footer}`}>
                     <img src="/logoMahmoud.png" className="mx-1" width={40} alt="" srcset="" />
                     © {new Date().getFullYear()} Mahmoud Othman — Full Stack Developer
                  </div>
               </div>
               <div className="col-md-6">
                  <div className={`${style.footer}`}>
                     <Link className="text-white me-3" to="/">LinkedIn</Link>
                     <Link className="text-white" to="/">GitHub</Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}