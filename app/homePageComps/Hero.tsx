"use client"

import { secondColor, darkBlueColorOpaque } from "../constants";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function Hero(props: {chgFV: Dispatch<SetStateAction<boolean>>}) {
  const subTextIdx = useRef(0);
  const divHeight = useRef("0");
  const divRef = useRef<HTMLDivElement>(null);
  const [textOpacity, chgOpacity] = useState(0);

  const rotationText = [
    <p>E-bike couriers are now part of everyday city life.<br/>
    Regulation is increasing.<br/>
    Insurance requirements are tightening.<br/>
    Enforcement capacity remains limited.</p>,
    <p>What is missing is not policy.<br/>
    It is the operational layer that carries regulation forward after it is introduced.</p>,
    <p>RiderLinx develops systems that document participation, incidents, and exposure over time.<br/>
    This enables eligibility, compliance, and regulation to function in practice, not only on paper.</p>,
    <p>RiderLinx is currently validating operational models through early stakeholder engagement in Toronto, focused on post-incident and post-licensing administration.</p>
  ];

  useEffect(()=>{
    if (textOpacity === 0) {
      subTextIdx.current = (subTextIdx.current + 1) % rotationText.length;
      divHeight.current = "auto";
      window.setTimeout(() => chgOpacity(1), 1000);
    }
    else if (textOpacity === 1) window.setTimeout(() => {
      divHeight.current = divRef.current?.offsetHeight + "px";
      chgOpacity(0);
    }, 6000);
  }, [textOpacity]);

  

  return <section style={{height: "100vh", width: "100%", backgroundImage: "url('/bikeWithCity.jpg')", backgroundPosition: "center", backgroundSize: "cover", paddingTop:"1px", paddingLeft: "20px"}}>
    <h1 style={{marginTop: "15vh", fontSize: "40px", width: "800px", maxWidth: "70%", backgroundColor: darkBlueColorOpaque, padding: "10px", color: "white", backdropFilter: "blur(2px)", border: "solid 2px rgba(0,0,0,0.2)", borderRadius: "6px"}}><b>RiderLinx</b>: operational infrastructure for regulated e-bike courier systems.</h1>
    <div id="heroDiv" style={{marginTop: "15px", fontSize: "20px", width: "700px", maxWidth: "60%", backgroundColor: darkBlueColorOpaque, padding: "5px", backdropFilter: "blur(5px)", border: "solid 2px rgba(0,0,0,0.2)", overflow:"hidden", transition: "height ease-in-out 1s", borderRadius: "6px", interpolateSize: "allow-keywords", height: divHeight.current}} ref={divRef}><div style={{opacity: textOpacity, transition: "opacity linear 0.5s", color: "white"}}>{rotationText[subTextIdx.current]}</div></div>
    
    <button type="button" style={{position: "absolute", bottom: "10px", cursor: "pointer", backgroundColor: secondColor, color: "white", padding: "10px", borderRadius: "6px", border: "solid 2px rgba(0,0,0,0.2)", fontSize: "20px", fontWeight:"bold", outline: "none"}} className="expandOnHover" onClick={()=>props.chgFV(true)}>Request a briefing</button>
  </section>;
}
