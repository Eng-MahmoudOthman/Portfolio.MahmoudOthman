import { useEffect, useRef, useState } from "react";

export default function Counter({ target }) {
   const [count, setCount] = useState(0);
   const ref = useRef(null);
   const started = useRef(false);

   useEffect(() => {
      const node = ref.current;

      const animateCount = () => {
         let start = 0;
         const end = target;
         const duration = 2000; // 2 seconds
         const startTime = performance.now();

         const update = (currentTime) => {
         const progress = Math.min((currentTime - startTime) / duration, 1);
         const value = Math.floor(progress * end);

         setCount(value);

         if (progress < 1) requestAnimationFrame(update);
         };

         requestAnimationFrame(update);
      };

      const observer = new IntersectionObserver(
         (entries) => {
         if (entries[0].isIntersecting && !started.current) {
            started.current = true;
            animateCount();
         }
         },
         { threshold: 0.6 }
      );

      if (node) observer.observe(node);

      return () => observer.disconnect();
   }, [target]);

   return (
      <span ref={ref} className="counter display-6 fw-bold main-color">
         {count}
      </span>
   );
}
