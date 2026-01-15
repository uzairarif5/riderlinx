import ObserverSection from "./ObserverSection";
import { Card } from "./Cards";

export default function CurrentStatus(){
  return <ObserverSection>
    <h2>Current Status</h2>
    <div style={{display:"grid", gridTemplateColumns:"60% 40%", justifyItems: "center"}}>
      <ul>
        <li>Early stage system validation</li>
        <li>Stakeholder engagement in Toronto</li> 
        <li>Live documentation standards being validated through RiderStatus usage</li> 
        <li>Pilot frameworks under development</li> 
        <li>City by city deployment consideration</li>
      </ul>
      <Card width="280px" rotation={2}>
        <p>No claims of scale.</p>
        <p>No speculative metrics.</p>
      </Card>
    </div>
  </ObserverSection>;
}