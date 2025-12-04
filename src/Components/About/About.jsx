import React from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.jsx';


export default function About() {
   return (
      <section className="py-5">
         <CustomTitle title="About" />
         <div className="container">
            <h2 className="fw-bold mb-3">عنّي</h2>
            <p className="text-muted">مطور ويب متخصص في React, Node.js, MongoDB.</p>
         </div>
      </section>
   );
}