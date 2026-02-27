import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Image from 'next/image';
import { HamburgerButton } from "./sideButton";
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
    <nav className=" w-full" style={{position: "relative", padding: "10px", display: "grid", gridTemplateColumns: "50px min-content 50px", justifyContent: "space-between"}}>
      <div></div>
      <Link href={"/"} style={{fontSize: "30px", outline: "none", textAlign: "center"}}>RiderLinx</Link>
      <HamburgerButton/>
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