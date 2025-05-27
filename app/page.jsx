import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
  



      
    </div>
  );
}
