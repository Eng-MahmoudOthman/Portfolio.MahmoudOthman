
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { Fragment } from "react";
import style from "./projectDetails.module.css"
import Header from "../Header/Header.jsx";
import CustomTitle from "../CustomTitle/CustomTitle.jsx";




export default function ProjectDetails() {
   const { category , slug } = useParams();

   const project = projects[category].find(p => p.slug === slug);
   if (!project) return <h2 className="alert alert-danger">Project not found</h2>;


   return (
      <Fragment>
         <Header title={project.name} titleColor={"text-white"} subTitle={"Projects Details"} backgroundURL={{backgroundImage: `url("/backgroundProjectDetails.jpg")`}} color={"text-white"}/>
         <CustomTitle title="Project Details" />

         <div className="container">
            <Link to="/projects" className="main-color my-3 d-inline-block fw-bold"><i class="fa-solid fa-left-long me-2"></i> Back to Projects Page</Link>
         </div>
         {/* Image Banner */}
         <div className={style.mainContainer}>
            <div className={style.banner}>
               {/* <Link to="/projects" className="main-color my-3 d-inline-block fw-bold"><i class="fa-solid fa-left-long me-2"></i> Back to Projects Page</Link> */}
               <img src={project.imageUrl} alt={project.name} />
            </div>
         </div>

         {/* Body */}
         <div className="container">
            {/* Project Title and Description */}
            <h1 className={`${style.title} h3 fw-bold main-color`}>{project.name}</h1>
            <h2 className={`${style.title} h5 fw-bold main-color`}>Project Overview :</h2>
            <p className={style.description}>{project.description}</p>

            {/* Links */}
            <div className={style.links}>
               <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo <i class="fa-solid fa-link"></i></a>
               <a href={project.frontUrl} target="_blank" rel="noopener noreferrer">Front-End Repo</a>
               <a href={project.backUrl} target="_blank" rel="noopener noreferrer">Back-End Repo</a>
            </div>

            {/* Basic Info */}
            <div className={style.section}>
               <h3  className="main-color">Project Info</h3>
               <p className="m-0"><strong className="main-color">Category:</strong> {project.category}</p>
               <p className="m-0"><strong className="main-color">Status:</strong> {project.status}</p>
               <p className="m-0"><strong className="main-color">Year:</strong> {project.year}</p>
               <p className="m-0"><strong className="main-color">Duration:</strong> {project.duration}</p>
               <p className="m-0"><strong className="main-color">Role:</strong> {project.role}</p>
            </div>

            {/* Frontend Skills */}
            <div className={style.section}>
               <h3  className="main-color">Key Features</h3>
               <ul className={style.list}>
                  {project.feature.length?project.feature.map((ele, idx) => <li key={idx}>{ele}</li>):"Not Exist Feature"}
               </ul>
            </div>

            {/* Frontend Skills */}
            <div className={style.section}>
               <h3  className="main-color">Frontend Skills</h3>
               <ul className={style.list}>
                  {project.skills_Front.length?project.skills_Front.map((skill, idx) => <li key={idx}>{skill}</li>):"Not Exist Skills"}
               </ul>
            </div>

            {/* Backend Skills */}
            <div className={style.section}>
               <h3  className="main-color">Backend Skills</h3>
               <ul className={style.list}>
                  {project.skills_Back.length?project.skills_Back.map((skill, idx) => <li key={idx}>{skill}</li>):"Not Exist Skills"}
               </ul>
            </div>

            {/* Libraries */}
            <div className={style.section}>
               <h3  className="main-color">Libraries Used</h3>
               <ul className={style.list}>
                  {project.libraries.length?project.libraries.map((lib, idx) => <li key={idx}>{lib}</li>):"Not Exist Libraries"}
               </ul>
            </div>

            {/* Database */}
            <div className={style.section}>
               <h3  className="main-color">Database Models</h3>
               <ul className={style.list}>
                  {project.database.length?project.database.map((db, idx) => <li key={idx}>{db}</li>):"Not Exist Database Models"}
               </ul>
            </div>

            {/* Security */}
            <div className={style.section}>
               <h3  className="main-color">Security Features</h3>
               <ul className={style.list}>
                  {project.security.length?project.security.map((sec, idx) => <li key={idx}>{sec}</li>):"Not Exist Security Features"}
               </ul>
            </div>

         </div>
      </Fragment>

   );
}
