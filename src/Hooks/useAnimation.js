import { useEffect } from "react";



export default function useAnimation(selector, showClass) {
   useEffect(() => {
      const elements = document.querySelectorAll(selector);

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add(showClass);
            }
         });
      });

      elements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
   }, [selector, showClass]);
}

