import React from 'react';
import { Link } from "react-router-dom";
import style from "./footer.module.css"



export default function Footer() {
   return (
      <footer className={`${style.sectionFooter} bg-dark text-white `}>
         <div className="container">
            <div className="row justify-content-between align-items-center text-center">
               <div className="col-md-6">
                  <div className={`${style.footer}`}>
                     <img src="/logoMahmoud.png" className="mx-1" width={40} alt="" srcset="" />
                     © {new Date().getFullYear()} Mahmoud Othman — Full Stack Developer
                  </div>
               </div>
               <div className="col-md-6 ">
                  <div className={`${style.footer}`}>
                     <div className="d-flex justify-content-center align-item-center justify-content-md-end">
                           <Link target="_blank" to="/">
                              <div className={`${style.social}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M12.026 6.81v4.13H9v5.051h3.026V31h6.216V15.992h4.171s.391-2.422.58-5.07h-4.728V7.469c0-.516.678-1.21 1.348-1.21H23V1.001h-4.605c-6.523 0-6.369 5.055-6.369 5.81z"></path>
                                 </svg>
                              </div>
                           </Link>

                           <Link target="_blank" to="/">
                              <div className={`${style.social}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff'  width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M31 6.883a12.292 12.292 0 01-3.534.969 6.178 6.178 0 002.705-3.402 12.386 12.386 0 01-3.911 1.494A6.137 6.137 0 0021.768 4a6.154 6.154 0 00-5.995 7.555 17.473 17.473 0 01-12.684-6.43 6.103 6.103 0 00-.832 3.093 6.153 6.153 0 002.737 5.122 6.162 6.162 0 01-2.788-.772v.077a6.161 6.161 0 004.936 6.035 6.225 6.225 0 01-1.622.216c-.397 0-.782-.039-1.159-.114a6.159 6.159 0 005.748 4.274 12.346 12.346 0 01-7.643 2.63c-.497 0-.986-.03-1.468-.084a17.398 17.398 0 009.433 2.769c11.321 0 17.509-9.377 17.509-17.509l-.021-.797a12.291 12.291 0 003.078-3.179z"></path>
                                 </svg>
                              </div>
                           </Link>

                           <Link target="_blank" to="/">
                              <div className={`${style.social}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="20" height="20" viewBox="0 0 32 32">
                                 <path d="M16 8.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 12.188A4.695 4.695 0 0111.312 16c0-2.586 2.104-4.688 4.688-4.688s4.688 2.102 4.688 4.688A4.695 4.695 0 0116 20.688zm8.063-11.751a.999.999 0 110-1.997.999.999 0 010 1.997zM21.625 1h-11.25A9.376 9.376 0 001 10.375v11.25A9.376 9.376 0 0010.375 31h11.25A9.376 9.376 0 0031 21.625v-11.25A9.376 9.376 0 0021.625 1zm6.563 20.625a6.57 6.57 0 01-6.563 6.563h-11.25a6.57 6.57 0 01-6.563-6.563v-11.25a6.57 6.57 0 016.563-6.563h11.25a6.57 6.57 0 016.563 6.563v11.25z"></path>
                                 </svg>
                              </div>
                           </Link>

                           <Link target="_blank" to="/">
                              <div className={`${style.social}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M24.769 5H7.23a6.231 6.231 0 00-6.231 6.231v8.768A6.231 6.231 0 007.23 26.23h17.539A6.231 6.231 0 0031 19.999v-8.768A6.231 6.231 0 0024.769 5zm-4.213 11.041l-8.203 3.913a.33.33 0 01-.471-.297v-8.07a.33.33 0 01.478-.294l8.203 4.157a.33.33 0 01-.007.591z"></path>
                                 </svg>
                              </div>
                           </Link>

                           <Link target="_blank" to="/">
                              <div className={`${style.social}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M29.333 18.777v9.83h-5.716v-9.172c0-2.304-.827-3.876-2.896-3.876-1.579 0-2.519 1.06-2.933 2.085-.151.366-.19.877-.19 1.389v9.574h-5.717s.077-15.534 0-17.144h5.717v2.43l-.038.055h.038v-.055c.76-1.166 2.116-2.833 5.152-2.833 3.762 0 6.582 2.45 6.582 7.716zM5.902 3.2c-1.956 0-3.235 1.279-3.235 2.961 0 1.646 1.242 2.964 3.159 2.964h.038c1.994 0 3.234-1.318 3.234-2.964C9.06 4.479 7.858 3.2 5.902 3.2zM3.006 28.608h5.715V11.464H3.006v17.144z"></path>
                                 </svg>
                              </div>
                           </Link>

                           <Link target="_blank" to="/">
                              <div className={`${style.social}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M16.434 0C7.664 0 3 5.62 3 11.748c0 2.842 1.588 6.386 4.13 7.51.386.174.596.1.682-.258.076-.272.41-1.582.572-2.2a.566.566 0 00-.136-.556c-.844-.976-1.514-2.754-1.514-4.422 0-4.274 3.398-8.424 9.18-8.424 5 0 8.498 3.248 8.498 7.894 0 5.25-2.778 8.882-6.388 8.882-1.998 0-3.486-1.568-3.014-3.508.57-2.31 1.688-4.794 1.688-6.46 0-1.494-.844-2.73-2.568-2.73-2.034 0-3.684 2.014-3.684 4.718 0 1.718.608 2.878.608 2.878S9.042 23.2 8.668 24.718c-.632 2.57.086 6.732.148 7.09.038.198.26.26.384.098.198-.26 2.63-3.73 3.312-6.238.248-.914 1.266-4.62 1.266-4.62.67 1.21 2.604 2.224 4.664 2.224 6.128 0 10.556-5.386 10.556-12.07C28.976 4.794 23.492 0 16.434 0z"></path>
                                 </svg>
                              </div>
                           </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}