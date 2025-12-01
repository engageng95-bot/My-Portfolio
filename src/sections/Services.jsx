import React from 'react'
import Button from '../Components/Button'
import {  Laptop, Server, Brush, Zap } from 'lucide-react'

const Data = [
    {
        id : 1,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: <Laptop/>
    },


    {
        id : 2,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: <Server/>
    },
    {
        id : 3,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: <Brush/>
    },
    {
        id : 4,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: <Zap/>
    },
]


function Services() {
  return (
    <section>
     <div className ='text-white'>
        <h2>My Services</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quam quibusdam voluptate labore ad laboriosam? Ipsam tempore reprehenderit id dolores.</p>
        <Button name = 'Learn More' style='bg-white text-black p-2 rounded-sm'/>
        </div>
        <div>
          {Data.map((item,)=>{
            return(
                <div key={item.id} className='flex'>
                    <span>{item.icon}</span>
                    <span>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </span>
                </div>
            )
          })}
        </div>
     </section>
  )
}

export default Services