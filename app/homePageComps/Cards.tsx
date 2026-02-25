import { ReactNode } from "react";

export function CardWithTitle(props: {title: string, text: string, rotation: number}) {
  return <div className="cardDiv" style={{width: "240px", display: "flex", flexDirection: "column", textAlign:"center", border: "solid 2px rgba(0,0,0,0.2)", borderRadius: "8px", transform: `rotateZ(${props.rotation}deg)`, margin:"20px"}}>
    <p style={{borderBottom:"dashed 2px rgba(0,0,0,0.2)", fontSize: "21px", lineHeight: "35px", width: "100%"}}><b>{props.title}</b></p>
    <p style={{padding:"0px 5px"}}>{props.text}</p>
  </div>;
}

export function Card(props: {width: string, children: ReactNode, rotation?: number}) {
  return <div className="cardDiv" style={{width: props.width, padding: "10px", border: "solid 2px rgba(0,0,0,0.2)", borderRadius: "8px", transform: `rotateZ(${props.rotation}deg)`, height: "min-content", margin: "30px"}}>{props.children}
  </div>;
}