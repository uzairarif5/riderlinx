"use client"

import { darkBlueColor } from "../constants";
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
    <div style={{display: "grid", gridTemplateColumns: "60% 40%", justifyItems: "center"}} ref={refdiv}>
      <div>
        <p>RiderLinx develops operational systems designed to:</p>
        <ul>
          <li>capture rider assets, incidents, and exposure using structured documentation</li>
          <li>preserve longitudinal records without real time enforcement or surveillance</li> 
          <li>administer eligibility and participation conditions when authorized</li> 
          <li>support suspensions, reinstatements, and rule breaches within delegated programs</li> 
          <li>maintain audit ready histories across pilots and regulated environments</li>
        </ul>
      </div>
      <Card width={"280px"} rotation={-5}><RoughNotation type="circle" color={darkBlueColor} show={isVisible} strokeWidth={3} padding={[30,30,30,30]}>
        <p>No real time enforcement.<br/> 
        No behavioral scoring.<br/>
        No speculative automation.<br/> 
        Administration, documentation, and continuity.</p>
      </RoughNotation></Card>
    </div>
  </ObserverSection>;
}