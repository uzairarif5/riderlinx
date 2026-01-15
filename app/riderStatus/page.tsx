import { darkBlueColorOpaque } from "../constants";

export default function RiderStatus() {
  return <main>
    <Hero/>
    <WhatRiderStatusIs/>
    <WhatRiderStatusRecords/>
    <DataControlsAndPrivacy/>
    <WhatRiderStatusDoesNotDo/>
    <RelationshipToRiderLinx/>
    <CommercialModel/>
    <StrategicFunction/>
  </main>;
}

function Hero() {
  return <section style={{backgroundImage:"url(/ridingBike.jpg)", backgroundSize: "cover", height: "80vh"}}>
    <div style={{color: "white", backdropFilter: "blur(2px)", border: "solid 2px rgba(0,0,0,0.2)", borderRadius: "6px", backgroundColor: darkBlueColorOpaque, width: "400px", padding: "10px",marginTop: "40px"}}>
      <h1 style={{fontSize: "50px"}}>Rider Status</h1>
      <small style={{fontSize: "18px"}}>A RiderLinx system for rider controlled incident and asset documentation.</small>
    </div>
  </section>;
}

function WhatRiderStatusIs() {
  return <section>
    <h2>What RiderStatus is</h2>
    <p>RiderStatus exists to solve a narrow but critical problem:</p>
    <p>When delivery riders are involved in traffic accidents, the records needed to respond properly 
    are often missing, incomplete, or scattered.</p> 
    <p>This lack of structured documentation delays police and insurance processes, increases errors 
    during high stress moments, and makes rider risk invisible to institutions.</p> 
    <p>RiderStatus converts informal rider activity and incidents into structured, rider controlled 
    administrative records that can later support regulatory pilots, insurance analysis, and policy 
    work without asserting enforcement authority.</p> 
    <p>RiderStatus is a system of record, not a decision maker.</p> 
  </section>;
}

function WhatRiderStatusRecords() {
  return <section>
    <h2>What RiderStatus Records</h2>

    <h3>Asset Registration (Baseline Context)</h3>
    <p>RiderStatus records basic asset information to establish ownership and exposure context, including:</p>
    <ul>
      <li>bike type (e bike / bicycle)</li> 
      <li>make and model (free text)</li> 
      <li>serial number (if available)</li> 
      <li>photographic evidence of the bike and identifying features</li> 
      <li>battery brand and serial number (optional)</li> 
      <li>timestamped registry identifier</li> 
    </ul>
    <p>These records provide baseline documentation commonly required after accidents or theft.</p> 
    
    <h3>Incident Documentation (Voluntary, Rider Submitted)</h3>
    <p>Riders may voluntarily document incidents, including:</p>
    <ul>
      <li>incident type (traffic accident, theft, damage)</li> 
      <li>date and approximate time</li> 
      <li>general location type (intersection, roadway, bike lane, sidewalk)</li> 
      <li>whether a motor vehicle was involved</li> 
      <li>supporting evidence (photos, reports, notes)</li> 
    </ul>
    <p>All submissions are self attributed, timestamped, and preserved as factual records.</p> 
    <p>RiderStatus does not assign fault, determine liability, or decide outcomes.</p> 
    
    <h3>Attribution and Record Continuity</h3>
    <p>RiderStatus maintains continuity across records through:</p> 
    <ul>
      <li>self declared rider name (private by default)</li>
      <li>internal RiderID reference identifier</li> 
      <li>record authorship and edit history</li> 
      <li>a longitudinal timeline of registered assets and incidents</li> 
    </ul>
    <p>This enables exposure analysis over time without real time tracking, behavioral monitoring, or performance scoring.</p> 
  </section>;
}

function DataControlsAndPrivacy() {
  return <section>
    <h2>Data Controls And Privacy</h2>

    <p>RiderStatus is intentionally designed to minimize privacy, political, and regulatory risk.</p> 
    <p>The system includes:</p>
    <ul>
      <li>no real time location tracking</li> 
      <li>no behavioral scoring or performance ratings</li> 
      <li>no automated data sharing with platforms, police, insurers, or governments</li> 
      <li>records remain private unless explicitly exported by the rider or used within an authorized program</li> 
    </ul>
    <p>This design preserves rider trust while maintaining institutional grade data integrity.</p> 
  </section>;
}

function WhatRiderStatusDoesNotDo() {
  return <section>
    <h2>What RiderStatus Does Not Do</h2>

    <p>RiderStatus does not:</p>
    <ul>
      <li>provide insurance or legal representation</li> 
      <li>certify competence or training</li>
      <li>enforce rules or regulations</li>
      <li>guarantee outcomes or assistance</li> 
      <li>issue payouts, benefits, or coverage</li> 
    </ul>
  </section>;
}

function RelationshipToRiderLinx() {
  return <section>
    <h2>Relationship To RiderLinx</h2>

    <p>RiderStatus is not a standalone governance system.</p> 
    <p>It functions as the intake and record creation layer that feeds RiderLinx infrastructure.</p> 
    <p>Data generated through RiderStatus enables RiderLinx to:</p>
    <ul>
      <li>observe real world exposure patterns</li> 
      <li>define controlled cohorts when authorized</li>
      <li>administer sponsored or regulatory pilots</li> 
      <li>support underwriting, safety, and policy analysis</li> 
    </ul> 
    <p>Without RiderStatus, RiderLinx has no disciplined source of rider level records.</p> 
    <p>Without RiderLinx, RiderStatus remains a documentation service without governance authority.</p>
  </section>;
}

function CommercialModel() {
  return <section>
    <h2>Commercial Model</h2>

    <p>RiderStatus may include limited rider paid fees to support:</p>
    <ul>
      <li>standardized document formatting and record export</li> 
      <li>ongoing secure record storage and availability</li> 
      <li>rider initiated exports of ownership and incident records</li> 
      <li>optional access to general informational resources and third party referrals</li> 
    </ul>
    <p>Rider fees do not influence how records are created, edited, or preserved.</p> 
    <p>RiderStatus does not provide legal, insurance, or claims assistance.</p> 
    <p>Institutional partners and sponsored programs remain the long term primary customers.</p> 
  </section>;
}

function StrategicFunction() {
  return <section>
    <h2>Strategic Function</h2>

    <p>RiderStatus allows RiderLinx to:</p>
    <ul>
      <li>build real world data before regulation is finalized</li> 
      <li>validate documentation standards in live conditions</li> 
      <li>demonstrate operational readiness to cities and insurers</li> 
      <li>transition responsibly into sponsored pilot programs</li> 
    </ul> 
  </section>;
}