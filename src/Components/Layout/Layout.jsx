import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import { Fragment } from "react";
import Header from "../Header/Header.jsx";

export default function Layout(){

   const location = useLocation() ;
   const hideFooterPages = ["ConfirmedAccount"] ;
   const shouldHideFooter = hideFooterPages.includes(location.pathname.split("/")[1]) ; 

   
   return (
      <Fragment>
         <Header/>
            <Outlet></Outlet>
         {!shouldHideFooter && <Footer />}
      </Fragment>
   )
}