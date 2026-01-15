"use client"

import { ReactNode, useEffect, useRef, useState } from "react";

export default function ObserverSection(props: {children: ReactNode}){
  const thisSec = useRef(null);
  const [isVisible, chgIsVis] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          chgIsVis(true);
          observer.disconnect();
        }
      });
    }, {threshold: 0.4});
    observer.observe(thisSec.current!);
  }, []);

  return <section ref={thisSec}><div style={{opacity: isVisible ? "1" : "0", transition: "opacity ease-in-out 0.4s"}}>
    {props.children}
  </div></section>
}