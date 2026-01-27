"use client"

import { ReactNode, useEffect, useRef, useState } from "react";
import { primaryColor } from "../constants";
import { Card } from "./Cards";
import ObserverSection from "./ObserverSection";
import { RoughNotation } from "react-rough-notation";

export default function OperatingPrinciple() {
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
    <h2>Operating Principles</h2>
    <div style={{display: "grid", gridTemplateColumns: "50% 50%", justifyItems: "center"}}>
      <Card width={"350px"} rotation={-1}>
        <p>Infrastructure, not advocacy.<br/> 
        Administration, not enforcement.<br/>
        Rules, not discretion. </p>
      </Card>
      <div ref={refdiv}>
        <EmphasisText pos={1} isVisible={isVisible}>We do not eliminate risk.</EmphasisText> 
        <div style={{height: "40px", width:"50%"}}/>
        <EmphasisText pos={2} isVisible={isVisible}>We make risk legible.</EmphasisText>
      </div>
    </div>
  </ObserverSection>;
}

function EmphasisText(props: {children: ReactNode, pos: number, isVisible: boolean}) {
  const deg = 2;
  return <p style={{maxWidth: "100%", fontSize: "30px", opacity: "0.9", fontWeight: "bold", transform:`rotateZ(${deg}deg)`, marginBottom:"0px"}}><RoughNotation type="underline" show={props.isVisible} strokeWidth={2} color={primaryColor}>{props.children}</RoughNotation></p>;
}