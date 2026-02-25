"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function Hero(props: {chgFV: Dispatch<SetStateAction<boolean>>}) {
  const subTextIdx = useRef(0);
  const divHeight = useRef("0");
  const divRef = useRef<HTMLDivElement>(null);
  const [textOpacity, chgOpacity] = useState(0);

  const rotationText = [
    <p>E-bike delivery has scaled rapidly.<br/>
    Licensing and insurance requirements are increasing. <br/>
    Insurance requirements are tightening.<br/>
    Enforcement capacity remains limited.</p>,
    <p>What is missing is not regulation.<br/>
    It is the administrative layer required to carry regulation forward once introduced.</p>,
    <p>RiderLinx builds structured systems that document device identity, participation continuity, and incident records over time enabling compliance, underwriting, and institutional programs to function in practice.</p>,
    <p>Initial validation is underway in Toronto.</p>
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

  return <section style={{height: "100vh", width: "100%", backgroundImage: "url('/bikeWithCity.jpg')", backgroundPosition: "center", backgroundSize: "cover", paddingTop:"1px", paddingLeft: "20px", position: "relative"}}>
    <h1 style={{width: "550px", maxWidth: "90%", padding: "10px", backdropFilter: "blur(2px)", border: "solid 2px rgba(0,0,0,0.2)", borderRadius: "6px"}}><b>RiderLinx</b>: Structured registry and record infrastructure for commercial e-bike delivery ecosystems.</h1>
    <div className="heroText" style={{marginTop: "15px", fontSize: "20px", maxWidth: "600px", padding: "5px", backdropFilter: "blur(5px)", border: "solid 2px rgba(0,0,0,0.2)", overflow:"hidden", transition: "height ease-in-out 1s", borderRadius: "6px", interpolateSize: "allow-keywords", height: divHeight.current}} ref={divRef}>
      <div style={{opacity: textOpacity, transition: "opacity linear 0.5s"}}>{rotationText[subTextIdx.current]}</div>
    </div>
    
    <button type="button" style={{position: "absolute"}} className="briefingButton" onClick={()=>props.chgFV(true)}>Request a briefing</button>
  </section>;
}
