import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import { primaryColor, primaryColorOpaque } from "../constants";

export default function Form(props: {vis: boolean, chgFV: Dispatch<SetStateAction<boolean>>}) { 
  const dRef = useRef<HTMLDialogElement | null>(null);
  const fRef = useRef<HTMLFormElement | null>(null);

  if (dRef.current) {
    if (props.vis) dRef.current.showModal();
    else dRef.current.close();
  }

  return <dialog ref={dRef} style={{backgroundColor: primaryColorOpaque, backdropFilter: "blur(15px)", outline:"none", margin: "auto", padding: "10px", borderRadius: "6px", border: `3px solid ${primaryColor}`}}>
    <div style={{display:"grid", gridTemplateColumns:"20px 460px 20px"}}>
      <span style={{userSelect:"none",opacity:"0"}}>X</span>
      <h3 style={{textAlign:"center", marginBottom: "20px", color: "white"}}>Please Fill This Form</h3>
      <button onClick={()=>{props.chgFV(false)}} style={{cursor: "pointer", marginBottom: "30px", color: "white"}}>X</button>
      <form style={{display:"grid", gridTemplateColumns:"45% 55%", width: "500px"}} ref={fRef} onSubmit={(event) => sendEmail(event, fRef.current!, props.chgFV)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required autoComplete="name"></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required autoComplete="email"></input>
          <label htmlFor="org">Organization:</label>
          <input type="text" id="org" name="org" required autoComplete="organization"></input>
          <label htmlFor="role">Role / Department:</label>
          <input type="text" id="role" name="role"></input>
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
        <button type="submit" style={{border: "solid 2px rgba(0,0,0,0.2)", cursor: "pointer", gridColumn: "span 2", width: "100px", justifySelf:"center", borderRadius: "6px", backgroundColor: primaryColor, color:"white"}}>Submit</button>
      </form>
    </div>
  </dialog>;
}

async function sendEmail(event: FormEvent, el: HTMLFormElement, chgFV: Dispatch<SetStateAction<boolean>>) {
  event.preventDefault();

  const formData = new FormData(el);
  const objToSend: {[key:string]: string} = {};
  formData.forEach((val, key) => objToSend[key] = val.toString());

  const res = await fetch("http://localhost:8888/sendEmail", {
    method: "POST",
    body: JSON.stringify(objToSend)
  });

  const resJSON = await res.json();

  if (res.ok && res.status === 200) {
    alert("Email sent!");
    chgFV(false);
    console.log(resJSON);
  }
  else {
    alert("There was a problem!");
    console.error(resJSON);
  }

}