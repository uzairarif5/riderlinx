import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Image from 'next/image';
import { notoSans } from "./constants";

export const metadata: Metadata = {
  title: "RiderLinx",
  description: "Structured registry and record infrastructure for commercial e-bike delivery ecosystems.",
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return <html lang="en">
    <body style={{margin: "0"}} className={notoSans.className}> 
      <Header/>
      {children}
      <Footer/>
    </body> 
  </html>;
}

function Header() {
  return <header style={{position: "sticky", top: 0, zIndex: 2}}>
    <nav className=" w-full" style={{userSelect: "none", position: "relative", padding: "10px", display:"flex", justifyContent:"space-between", flexWrap: "wrap", rowGap: "10px"}}>
      <Link href={"/"} style={{fontSize: "35px", textDecoration: "none", color: "white", outline: "none"}}>
        <Image src="/logo.png" alt="" width={50} height={50} style={{display: "inline-block",marginRight:"4px"}}/>
        RiderLinx
      </Link>
      <span style={{display: "flex", columnGap: "30px", alignItems: "center"}}>
        <Link href={"/"}>Home</Link>
        <Link href={"/privacy"}>Privacy</Link>
        <Link href={"/disclaimers"}>Disclaimers</Link>
        <Link href={"/riderStatus"}>RiderStatus</Link>
      </span>
    </nav>
  </header>;
}

function Footer() {
  return <footer style={{padding: "40px", display: "grid", gridTemplateColumns:"auto 60px", gridTemplateRows: "auto auto"}}>
    <p style={{gridColumn:"1"}}>RiderLinx is operated by Ribenn Inc.</p>
    <Image src="/logo.png" alt="" width={50} height={50} style={{gridRow: "1 / span 2",gridColumn:"2"}}/>
    <p style={{gridColumn:"1"}}>Links: <Link href={"/privacy"}>Privacy</Link> | <Link href={"/disclaimers"}>Disclaimers</Link></p>
  </footer>
}