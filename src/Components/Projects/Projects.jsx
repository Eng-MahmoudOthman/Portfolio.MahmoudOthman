import React from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.jsx';


export default function Projects() {
   const demoProjects = [
      { id: 1, title: 'E-commerce Dashboard', desc: 'لوحة تحكم للتجارة الإلكترونية' },
      { id: 2, title: 'Clinic Booking', desc: 'نظام لحجز مواعيد العيادات' },
      { id: 3, title: 'PDF Invoicing', desc: 'توليد فواتير PDF' },
   ];


   return (
      <section className="py-5 bg-light">
         <CustomTitle title="Projects" />
         <div className="container">
            <h2 className="fw-bold mb-4">Projects</h2>
            <div className="row g-4">
               {demoProjects.map(p => (
                  <div className="col-md-4" key={p.id}>
                     <div className="card shadow-sm h-100">
                        <div className="card-body">
                           <h5>{p.title}</h5>
                           <p className="text-muted">{p.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}