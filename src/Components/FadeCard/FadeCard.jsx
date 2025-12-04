import { useEffect, useRef } from "react";
import style from "./fadeCard.module.css" ;




export default function FadeCard({ children }) {
      const cardRef = useRef(null);

      useEffect(() => {
         const element = cardRef.current;

         const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
               element.classList.add(style.show);
            }
         });

         observer.observe(element);

         return () => observer.disconnect();
      }, []);

      return (
         <div ref={cardRef} className={style.card}>
            {children}
         </div>
      );
}
