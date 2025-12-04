import { useState, useEffect } from "react";
import style from "./typingEffect.module.css"

export default function TypingEffect({ texts, speed = 100, delay = 1500 }){
      const [index, setIndex] = useState(0); // أي جملة
      const [subIndex, setSubIndex] = useState(0); // أي حرف
      const [blink, setBlink] = useState(true);

      // كتابة الحروف
      useEffect(() => {
         if (subIndex < texts[index].length) {
            const timeout = setTimeout(() => {
            setSubIndex(subIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
         } else {
            const timeout = setTimeout(() => {
            setSubIndex(0);
            setIndex((prev) => (prev + 1) % texts.length);
            }, delay);
            return () => clearTimeout(timeout);
         }
      }, [subIndex, index, texts, speed, delay]);

      // كرسر يبرق
      useEffect(() => {
         const interval = setInterval(() => {
            setBlink((prev) => !prev);
         }, 500);
         return () => clearInterval(interval);
      }, []);

      return (
         <p className={`${style.typingEffect}`}>
            {texts[index].substring(0, subIndex)}
            <span className={`${style.cursor} ${blink ? style.blink : ""}`}>|</span>
         </p>
      );
};

