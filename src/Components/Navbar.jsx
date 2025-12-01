import Button from './Button'
import {Menu} from 'lucide-react'
import React, { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  const techButtons = [
    "JavaScript", "React.jsx", "Node", "Express", "Bootstrap", "jQuery",
    "PHP", "MySQL", "MongoDB", "Git", "GitHub", "Figma", "WordPress"
  ];

  return (
    <>
      <nav className='flex justify-between items-center px-8 py-4 text-white border-b border-gray-100'>
        <a href="" className='font-bold'>Kelvin</a>

        <ul className='md:flex gap-4 font-medium hidden'>
          <li>Home</li>
          <li>Services</li>
          <li>Experiences</li>
          <li>Projects</li>
          <li>About</li>
          <li>FAQs</li>
        </ul>

        <Button name='Contact' style='lg:flex bg-gray-100 px-4 py-1 cursor-pointer text-black md:hidden' />
        {/* <Menu className='text-3xl flex md:hidden'/> */}

       <button
        onClick={() => setOpen(!open)}
        className="text-3xl md:hidden"
       >
        ☰
       </button>
       <ul
          className={`absolute left-0 w-full bg-gray-900 text-white flex flex-col gap-6 p-6 text-lg font-medium md:hidden transition-all duration-300
          ${open ? "top-20 opacity-100" : "top-[-500px] opacity-0"}`}
        >
          <li onClick={() => setOpen(false)}>Home</li>
          <li onClick={() => setOpen(false)}>Services</li>
          <li onClick={() => setOpen(false)}>Experiences</li>
          <li onClick={() => setOpen(false)}>Projects</li>
          <li onClick={() => setOpen(false)}>About</li>
          <li onClick={() => setOpen(false)}>FAQs</li>

          {/* Mobile Contact Button */}
          <Button
            name="Contact"
            style="bg-gray-100 text-black px-4 py-2 rounded"
          />
        </ul>

      </nav>

      
      <div className='flex flex-col justify-center items-center text-center mt-16 text-white font-bold gap-4'>
        <h1 className='text-4xl'>I'm Oyovwevotu Kelvin </h1>
        <h2 className='text-2xl'>Web Developer</h2>

        <p className="max-w-[600px] text-center font-normal leading-relaxed">
          I specialised in researching and analysing your brand and provide you 
          a beautiful and effective website for making a digital standing 
          among your competitors.
        </p>

      
        <div className="flex gap-4 mt-4">
          <Button name="Get yours now" style="bg-gray-500 px-4 py-2 rounded" />
          <Button name="See my works" style="bg-gray-500 px-4 py-2 rounded" />
        </div>
        <p className="max-w-[700px] text-center font-normal leading-relaxed"> Technologies I Use</p>
        <div className="flex flex-col md:flex-row gap-10 mt-6 items-start justify-center w-full">

          <div className="w-full flex justify-center overflow-x-auto mt-6 no-scrollbar">
            <div className="flex gap-2 whitespace-nowrap">
              {techButtons.map((item, index) => (
                <Button
                  key={index}
                  name={item}
                  style="bg-gray-700 px-2 py-[4px] text-xs rounded text-white"
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar