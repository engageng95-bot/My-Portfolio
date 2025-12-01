// import Services from "../sections/Service";
import React from 'react'
import Navbar from "../Components/Navbar";
import Services from "../sections/Services";
import Button from '../Components/Button';
import Hero from '../sections/Hero';
import { motion } from "framer-motion";
import Accordion from '../sections/Accordion';


function Home() {
  return (
    <div className="big-black min-h-screen">
      <Navbar/>
      <Services/>
      <Button/>
      <Hero/>
      <Accordion/>
    </div>
  )
}
export default Home