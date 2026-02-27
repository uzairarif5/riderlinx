"use client"

import Link from "next/link";
import ObserverSection from "./homePageComps/ObserverSection";
import HowRiderLinxWorks from "./homePageComps/HowRiderLinxWorks";
import { CardWithTitle } from "./homePageComps/Cards";
import OperatingPrinciple from "./homePageComps/OperatingPrinciple";
import Form from "./homePageComps/Form";
import { Dispatch, SetStateAction, useState } from "react";

export default function Home() {
  const [FormVisibility, chgFV] = useState(false);

  return <main>
    <Hero chgFV={chgFV}/>
    <WhatRiderLinxIs/>
    <WhyThisMattersNow/>
    <WhatRiderLinxIsNot/>
    <HowRiderLinxWorks/>
    <RiderStatus/>
    <DesignedForInstitutions/>
    <OperatingPrinciple/>
    <CurrentStatus/>
    <Contact chgFV={chgFV}/>
    <Form vis={FormVisibility} chgFV={chgFV}/>
  </main>;
}

function Hero(props: {chgFV: Dispatch<SetStateAction<boolean>>}) {
  return <section style={{height: "100vh", width: "100%", backgroundImage: "url('/homeImg.png')", backgroundSize: "cover", paddingTop:"1px", paddingLeft: "20px", position: "relative", backgroundPosition: "center"}}>
    <h1>Safer E-bike Delivery</h1>
    <div className="heroText">
      <p>A verified registry and documentation system for commercial E-bike couriers.</p>
    </div>
    
    <button type="button" className="briefingButton" onClick={()=>props.chgFV(true)}>Request a briefing</button>
  </section>;
}


function WhatRiderLinxIs() {
  return <ObserverSection>
    <h2>What RiderLinx Is</h2>
    <p>RiderLinx operates a neutral administrative layer for regulated and transitioning delivery environments.</p>
    <p>We focus on the operational substrate that regulation depends on: </p>
    <ul>
      <li>Structured device registry identification</li> 
      <li>Participation status continuity</li> 
      <li>Standardized incident documentation</li> 
      <li>Cohort-level exposure signals</li> 
    </ul>
    <p>This infrastructure enables licensing frameworks, insurance products, and institutional programs to operate with durable records rather than ad hoc reporting.</p>
    <p>Systems are designed to integrate with existing municipal and institutional structures.</p>
  </ObserverSection>;
}

function WhyThisMattersNow() {
  return <ObserverSection>
    <h2>Why This Matters Now</h2>    
    <p>Administrative gaps follow legalization.<br/> 
    Across jurisdictions, formal approval of e-bikes is common.<br/>
    Administrative continuity is not.</p>
    <p>As scale increases:</p>
    <ul>
      <li>Device compliance becomes ambiguous</li> 
      <li>Incident reporting fragments</li> 
      <li>Insurance coverage clarity lags</li> 
      <li>Eligibility enforcement becomes inconsistent</li> 
      <li>Without structured records, risk remains difficult to measure and manage.</li> 
    </ul>
    <p>RiderLinx exists to address that gap.</p> 
  </ObserverSection>;
}

function WhatRiderLinxIsNot() {
  return <ObserverSection>
    <h2>What RiderLinx Is Not</h2>
    <p>RiderLinx is not:</p>
    <ul>
      <li>A delivery platform</li> 
      <li>A rider advocacy organization</li> 
      <li>An insurer or broker</li> 
      <li>A licensing authority</li>
      <li>A real-time monitoring system </li>
    </ul>
    <p>We do not enforce rules. </p> 
    <p>We maintain structured administrative records that allow authorized institutions to apply rules consistently.</p> 
  </ObserverSection>;
}

function RiderStatus() {
  return <ObserverSection>
    <h2>RiderStatus</h2>
    <p>A RiderLinx intake and documentation system.</p>
    <p>RiderStatus converts informal delivery activity into structured administrative records.</p>
    <p>It functions as the intake layer that:</p>
    <ul>
      <li>Registers delivery assets with timestamped identifiers</li>
      <li>Captures structured incident documentation</li> 
      <li>Preserves longitudinal continuity</li> 
      <li>Enables exportable, standardized records</li> 
    </ul>
    <p>RiderStatus does not assign fault, certify competence, or enforce behavior.</p>
    <p>It creates referenceable records that can support underwriting, pilot programs, and regulatory initiatives when authorized.</p>
    <Link href={"/riderStatus"} style={{textDecoration: "underline"}}>Learn more about RiderStatus &rarr;</Link>
  </ObserverSection>;
}

function DesignedForInstitutions() {
  return <ObserverSection>
    <h2>Designed For Institutions</h2>
    <div style={{display: "flex", justifyContent: "space-evenly", paddingTop: "20px", flexWrap: "wrap"}}>
      <CardWithTitle
        title="Cities"
        text="Reduce the administrative burden associated with licensing and compliance without expanding enforcement capacity."
        rotation={5}
      />
      <CardWithTitle
        title="Insurers"
        text="Access structured cohort-level data and documented continuity to inform underwriting and risk modeling."
        rotation={-4}
      />
      <CardWithTitle
        title="Delivery Programs"
        text="Operate within regulated or pilot environments through externally administered documentation and participation systems."
        rotation={4}
      />
    </div>
  </ObserverSection>;
}

function CurrentStatus(){
  return <ObserverSection>
  <h2>Current Status</h2>
    <ul>
      <li>Early stage system validation</li>
      <li>Structured device cohorts under development</li> 
      <li>Stakeholder engagement in Toronto</li> 
      <li>Pilot frameworks under development</li> 
    </ul>
    <p>RiderLinx is building disciplined administrative substrate before broader deployment.</p>
  </ObserverSection>;
}

function Contact(props: {chgFV: Dispatch<SetStateAction<boolean>>}) {
  return <ObserverSection>
    <h2>Contact</h2>
    <p>RiderLinx is not a consumer-facing service.</p>
    <p>This work is intended for cities, insurers, and institutional operators managing regulated or transitioning delivery ecosystems.</p>
    <button type="button" className="briefingButton" onClick={()=>props.chgFV(true)}>Request a briefing</button>
  </ObserverSection>;
}