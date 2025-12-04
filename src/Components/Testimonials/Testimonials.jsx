import React from 'react';


export default function Testimonials() {
   const items = [
      { by: 'Client A' , text: 'ممتاز وملتزم بالمواعيد.' } ,
      { by: 'Client B' , text: 'التواصل كان سهل والشغل نظيف.' } ,
   ];


   return (
      <section className="py-5">
         <div className="container">
            <h2 className="fw-bold mb-4">Testimonials</h2>
            <div className="row g-3">
               {items.map((t, i) => (
               <div className="col-md-6" key={i}>
                  <div className="card p-3 shadow-sm h-100">
                     <p>"{t.text}"</p>
                     <h6 className="text-muted">— {t.by}</h6>
                  </div>
               </div>
               ))}
            </div>
         </div>
      </section>
   );
}