import { Dispatch, SetStateAction, useRef } from "react";
import { lightBlueColor, darkBlueColor } from "../constants";

export default function Form(props: {vis: boolean, chgFV: Dispatch<SetStateAction<boolean>>}) { 
  const dRef = useRef<HTMLDialogElement | null>(null);

  if (dRef.current) {
    if (props.vis) dRef.current.showModal();
    else dRef.current.close();
  }

  return <dialog ref={dRef} style={{backgroundColor:lightBlueColor, outline:"none", margin: "auto", padding: "10px", borderRadius: "6px", border: `3px solid ${darkBlueColor}`}}>
    <div style={{display:"grid", gridTemplateColumns:"20px 460px 20px"}}>
      <span style={{userSelect:"none",opacity:"0"}}>X</span>
      <h3 style={{textAlign:"center", marginBottom: "20px"}}>Please Fill This Form</h3>
      <button onClick={()=>{props.chgFV(false)}} style={{cursor: "pointer", marginBottom: "30px"}}>X</button>
      <form style={{display:"grid", gridTemplateColumns:"50% 50%", width: "500px"}}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required autoComplete="name"></input>
          <label htmlFor="org">Organization:</label>
          <input type="text" id="org" name="org" required autoComplete="organization"></input>
          <label htmlFor="role">Role / Department:</label>
          <input type="text" id="role" name="role"></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required autoComplete="email"></input>
        </div>
        <div>
          <label htmlFor="purpose">Purpose:</label>
          <select name="purpose" id="purpose" defaultValue={"city"}>
            <option value="city">City</option>
            <option value="insurers">Insurers</option>
            <option value="operator">Operator</option>
            <option value="research">Research</option>
            <option value="others">Others</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" style={{height: "150px"}} required></textarea>
        </div>
      </form>
    </div>
  </dialog>;
}

