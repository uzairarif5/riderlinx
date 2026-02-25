export default function RiderStatus() {
  return <main>
    <Hero/>
    <Problem/>
    <WhatRiderStatusRecords/>
    <PrivacyAndDataControls/>
    <StrategicRole/>
  </main>;
}

function Hero() {
  return <section style={{backgroundImage:"url(/ridingBike.jpg)", backgroundSize: "cover", height: "80vh"}}>
    <div className="heroText" style={{color: "white", backdropFilter: "blur(2px)", border: "solid 2px rgba(0,0,0,0.2)", borderRadius: "6px", maxWidth: "400px", padding: "10px"}}>
      <h1 style={{fontSize: "50px", backgroundColor:"transparent"}}>Rider Status</h1>
      <small style={{fontSize: "18px"}}>A structured documentation system for delivery rider assets and incidents.</small>
    </div>
  </section>;
}

function Problem() {
  return <section>
    <h2>Problem</h2>
    <p>When delivery riders are involved in collisions or asset disputes, documentation is often incomplete, informal, or fragmented.</p>
    <p>This complicates:</p> 
    <ul>
      <li>Insurance processing</li> 
      <li>Institutional review</li> 
      <li>Regulatory pilots</li> 
      <li>Exposure analysis</li> 
    </ul>
    <p>RiderStatus provides structured, timestamped administrative records without asserting enforcement authority.</p> 
  </section>
}

function WhatRiderStatusRecords() {
  return <section>
    <h2>What RiderStatus Records</h2>

    <h3>Asset Registration</h3>
    <ul>
      <li>E-Vehicle type</li> 
      <li>Make & model</li> 
      <li>Serial number (if available)</li> 
      <li>Photographic documentation</li> 
      <li>Battery information (optional)</li> 
      <li>Timestamped Registry ID</li> 
    </ul>
    
    <h3>Incident Documentation (Voluntary, Rider Submitted)</h3>
    <ul>
      <li>Incident type</li> 
      <li>Date & approximate time</li> 
      <li>General location category</li> 
      <li>Motor vehicle involvement (yes/no)</li> 
      <li>Supporting documentation (optional)</li>
    </ul>   
    <p>All records are self-attributed and timestamped.<br/> 
    RiderStatus does not determine liability.</p> 
  </section>;
}

function PrivacyAndDataControls() {
  return <section>
    <h2>Privacy And Data Controls</h2>

    <ul>
      <li>Privacy & Data Controls</li> 
      <li>No real-time location tracking</li> 
      <li>No behavioral scoring</li> 
      <li>No automated sharing with platforms or government</li> 
      <li>Records remain private unless exported by participant or used in authorized program</li>
    </ul>
  </section>;
}

function StrategicRole() {
  return <section>
    <h2>Strategic Role</h2>

    <p>RiderStatus feeds structured data into RiderLinx administrative systems.</p>
    <p>It enables:</p>
    <ul>
      <li>Cohort definition</li> 
      <li>Exposure continuity</li> 
      <li>Pilot administration</li> 
      <li>Underwriting analysis</li>
    </ul> 
    <p>Without structured intake, no administrative layer is possible.</p>
  </section>;
}