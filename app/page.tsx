"use client"

import Link from "next/link";
import Hero from "./homePageComps/Hero";
import ObserverSection from "./homePageComps/ObserverSection";
import { accentColor } from "./constants";
import HowRiderLinxWorks from "./homePageComps/HowRiderLinxWorks";
import { CardWithTitle } from "./homePageComps/Cards";
import OperatingPrinciple from "./homePageComps/OperatingPrinciple";
import CurrentStatus from "./homePageComps/CurrentStatus";
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


function WhatRiderLinxIs() {
  return <ObserverSection>
    <h2>What RiderLinx Is</h2>
    <p>RiderLinx is an independent operator of neutral administrative infrastructure for regulated and transitioning e-bike courier environments.</p>
    <p>The focus is on what regulation depends on, before and after it is introduced:</p>
    <ul>
      <li>documenting rider activity, assets, and incidents using structured records</li>
      <li>preserving continuity across programs, pilots, and jurisdictions</li>
      <li>enabling eligibility and participation rules to be administered when authority is delegated</li>
    </ul>
    <p>This infrastructure allows regulatory frameworks to remain functional as scale increases.</p>
    <p>All systems are policy aligned, audit ready, and designed to integrate within existing municipal and institutional structures.</p>
  </ObserverSection>;
}

function WhyThisMattersNow() {
  return <ObserverSection>
    <h2>Why This Matters Now</h2>
    <p>Courier activity has reached a scale where informal oversight no longer works.</p>
    <p>Cities face rising safety, battery, and incident response pressures.<br/> 
    Insurers cannot underwrite undocumented or unmanaged exposure.<br/>
    Delivery programs risk exclusion from regulated environments.</p> 
    <p>Without structured incident and exposure records, risk remains invisible. Regulation, insurance, and pilots cannot operate reliably.</p>
  </ObserverSection>;
}

function WhatRiderLinxIsNot() {
  return <ObserverSection>
    <h2>What RiderLinx Is Not</h2>
    <p>RiderLinx is not:</p>
    <ul>
      <li>a delivery platform</li> 
      <li>a rider advocacy organization</li> 
      <li>an insurer or insurance intermediary</li> 
      <li>a training, certification, or licensing authority</li>
    </ul>
    <p>RiderLinx does not replace regulation.</p> 
    <p>It exists to support the operation of regulation over time.</p> 
  </ObserverSection>;
}

function RiderStatus() {
  return <ObserverSection>
    <h2>RiderStatus</h2>
    <p>RiderStatus is a core RiderLinx system that converts undocumented rider activity and incidents into structured, rider controlled administrative records. 
    </p>
    <p>RiderStatus functions as the intake and documentation layer that:</p>
    <ul>
      <li>records rider assets and baseline exposure context</li>
      <li>captures incident documentation using consistent, reviewable criteria</li> 
      <li>preserves longitudinal continuity without real time tracking or enforcement</li> 
      <li>enables later eligibility, pilot participation, and underwriting when authorized</li> 
    </ul>
    <p>RiderStatus does not assign fault, certify competence, or enforce behavior.</p>
    <p>It exists to make rider risk legible, auditable, and referenceable before authority is delegated and after regulation is introduced.</p>
    <Link href={"/riderStatus"} style={{textDecoration: "underline"}}>Learn more about RiderStatus &rarr;</Link>
  </ObserverSection>;
}

function DesignedForInstitutions() {
  return <ObserverSection>
    <h2>Designed For Institutions</h2>
    <div style={{display: "flex", justifyContent: "space-evenly", paddingTop: "20px"}}>
      <CardWithTitle
        title="Cities"
        text="Reduce the administrative burden that regulation depends on without expanding enforcement capacity or assuming additional liability."
        rotation={5}
      />
      <CardWithTitle
        title="Insurers"
        text="Enable underwriting analysis based on documented incidents, asset records, and longitudinal exposure histories."
        rotation={-4}
      />
      <CardWithTitle
        title="Delivery Programs"
        text="Operate within regulated or pilot environments through externally administered documentation and participation requirements."
        rotation={4}
      />
    </div>
  </ObserverSection>;
}

function Contact(props: {chgFV: Dispatch<SetStateAction<boolean>>}) {
  return <ObserverSection>
    <h2>Contact</h2>
    <p>RiderLinx is not a consumer service.</p>
    <p>This work is intended for cities, insurers, and operating partners engaged in regulated or transitioning environments.</p>
    <button type="button" style={{cursor: "pointer", backgroundColor: accentColor, color: "white", padding: "10px", borderRadius: "6px", border: "solid 2px rgba(0,0,0,0.2)", fontSize: "20px", fontWeight:"bold", outline: "none"}} className="expandOnHover" onClick={()=>props.chgFV(true)}>Request a briefing</button>
  </ObserverSection>;
}