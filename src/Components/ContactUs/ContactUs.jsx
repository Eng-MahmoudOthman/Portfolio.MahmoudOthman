// import { Fragment } from 'react';
// import { Link} from 'react-router-dom';
// import style from "./contactUs.module.css";
// import Header from '../Header/Header.jsx';




// export default function ContactUs() {
//    return (
//       <Fragment>
//          <Header title={"Contact Me"} titleColor={"text-white"} subTitle={"Welcome to explore my Contact Me"} backgroundURL={{backgroundImage: `url("/backgroundHeaderContact.jpg")`}} color={"text-white"}/>
//             <section className={`${style.contact} py-5  position-relative`}>
//                <div className="text-center">
//                   <h3 className="fw-bold titleAnimation text-muted">Contact Me</h3>
//                   <p className="text-muted small titleAnimation">
//                      Welcome to explore my Contact Me.
//                   </p>
//                </div>

//                <div className='container d-flex justify-content-center align-item-center my-4 '>
//                      <form className={`${style.form} my-4 pb-5 pt-2`}>
//                         <input type="text" placeholder='Enter Your Name' name='name' className='form-control rounded-0 px-4 py-2  my-3' />
//                         <input type="email" placeholder='Enter Your Email' name='email' className='form-control rounded-0 px-4 py-2  my-3' />
//                         <textarea name="message" placeholder='Enter Your Message' rows={10} className='form-control rounded-0 px-4 py-2  my-3' ></textarea>
//                         <div className='text-center my-3'>
//                            <button className={`${style.btnSend} btn text-white rounded-0`}>SEND</button>
//                            {/* <button className={`${style.btnSend}   border-0 outline-0 text-white rounded-0`}>SEND</button> */}
//                         </div>
//                      </form>
//                </div>
//             </section>
//       </Fragment>
//    )
// }



import { Fragment, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from "./contactUs.module.css";
import Header from '../Header/Header.jsx';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function ContactUs() {

   const[loading , setLoading] = useState(false) ;
   async function sendData(values, { resetForm }){
      setLoading(true) ;
      await axios.post("https://store-alborglab-app-back-end.vercel.app/api/v1/users/portfolio" , values)
      .then(({data})=>{
         toast.success("تم إرسال بياناتك بنجاح. سيتم التواصل فى اقرب وقت ممكن شكرا لتواصلك معنا ");
         // toast.success(data.message);
         resetForm()
         setLoading(false) ;
      })
      .catch((error)=>{
         setLoading(false) ;
         toast.error(error.response.data.message);
      })
         
   }
   // إعداد Formik
   const formik = useFormik({
      initialValues: {
         name: '',
         phone: '',
         email: '',
         message: '',
      },
      validationSchema: Yup.object({
         name: Yup.string().required('Name is required'),
         phone: Yup.string().required('Phone is required'),
         email: Yup.string().email('Invalid email').required('Email is required'),
         message: Yup.string().required('Message is required'),
      }),
      onSubmit: sendData 
   });


   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }, [])

   return (
      <Fragment>
         <ToastContainer/>
         <Header 
            title={"Contact Me"} 
            titleColor={"text-white"} 
            subTitle={"Welcome to explore my Contact Me"} 
            backgroundURL={{backgroundImage: `url("/backgroundHeaderContact.jpg")`}} 
            color={"text-white"}
         />
         <section className={`${style.contact} position-relative `}>
            <div className="text-center">
               <h3 className="fw-bold titleAnimation text-muted">Contact Me</h3>
               <p className="text-muted small titleAnimation">
                  Welcome to explore my Contact Me. <br/> <br/>
                  mahmoud.osman440@gmail.com <br/>
                  01126999142 - 01095677758 <br/>
                  Cairo - Giza
               </p>
            </div>

            <div className='container d-flex justify-content-center align-items-center my-4'>
               <form 
                  className={`${style.form} mb-4 pb-5 pt-2 `} 
                  onSubmit={formik.handleSubmit}
               >
                  <input 
                     type="text" 
                     name="name" 
                     placeholder='Enter Your Name' 
                     className='form-control rounded-0 px-4 py-2 my-3' 
                     value={formik.values.name} 
                     onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                     <div className="text-danger small">{formik.errors.name}</div>
                  ) : null}

                  <input 
                     type="string" 
                     name="phone" 
                     placeholder='Enter Your Phone' 
                     className='form-control rounded-0 px-4 py-2 my-3' 
                     value={formik.values.phone} 
                     onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                     <div className="text-danger small">{formik.errors.phone}</div>
                  ) : null}

                  <input 
                     type="email" 
                     name="email" 
                     placeholder='Enter Your Email' 
                     className='form-control rounded-0 px-4 py-2 my-3' 
                     value={formik.values.email} 
                     onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                     <div className="text-danger small">{formik.errors.email}</div>
                  ) : null}

                  <textarea 
                     name="message" 
                     placeholder='Enter Your Message' 
                     rows={10} 
                     className='form-control rounded-0 px-4 py-2 my-3' 
                     value={formik.values.message} 
                     onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                     <div className="text-danger small">{formik.errors.message}</div>
                  ) : null}

                  <div className='text-center my-3'>
                     {loading?
                        <button className={`${style.btnSend} btn text-white rounded-0`}>
                           <span className="spinner-border spinner-border-sm"></span>
                        </button>
                     :
                        <button type="submit" className={`${style.btnSend} btn text-white rounded-0`}>
                           SEND
                        </button>
                     }
                  </div>
               </form>
            </div>
         </section>
      </Fragment>
   )
}
