"use client"

import { RoughNotation } from "react-rough-notation";
import ObserverSection from "./ObserverSection";
import { Card } from "./Cards";
import { useEffect, useRef, useState } from "react";

export default function HowRiderLinxWorks() {
  const refdiv = useRef(null);
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
    observer.observe(refdiv.current!);
  }, []);
  
  return <ObserverSection>
    <h2>How RiderLinx Works</h2>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", rowGap: "20px"}} ref={refdiv}>
      <div>
        <p>RiderLinx systems are designed to:</p>
        <ul> 
          <li>Assign device-level Registry IDs</li>
          <li>Preserve longitudinal participation records</li>
          <li>Capture incident documentation using consistent structure</li>
          <li>Support eligibility and participation conditions when authorized</li> 
          <li>Maintain audit-ready administrative histories</li> 
        </ul>  
        <p>Administration and continuity — not surveillance.</p>
      </div>
      <Card width={"280px"} rotation={-5}><RoughNotation type="circle" show={isVisible} strokeWidth={3} padding={[22,22,22,22]}>
        <p>No real time enforcement.<br/> 
        No behavioral scoring.<br/>
        No telematics dependency.</p>
      </RoughNotation></Card>
    </div>
  </ObserverSection>;
}