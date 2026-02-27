"use client"

import Link from "next/link"
import { useState } from "react"

export function HamburgerButton() {
  const [dropDownDis, changeDD] = useState("none");

  function buttonClicked() {
    if (dropDownDis === "none") changeDD("block");
    else changeDD("none");
  }

  return <div onMouseEnter={()=>{changeDD("block")}} onMouseLeave={()=>{changeDD("none")}}>
    <button style={{fontSize: "30px", cursor: "pointer", outline: "none", textAlign: "center"}} onClick={buttonClicked}>≡</button>
    <div id="sideLinks" style={{display: dropDownDis}}>
      <Link href={"./"}>Home</Link>
      <Link href={"/riderStatus"}>RiderStatus</Link>
    </div>
  </div>
}