import React from 'react'
import { AccordionDate } from '../Constants/AccordionData'
import { useState } from 'react'

 
function Accordion() {
   const [OpenId, setOpenId,] = useState(null)

    function handleToggle(id){
        setOpenId(OpenId == id ? null :id)

    }
 
  return (
    <section className='mt-12'>
    <div className='w-5/6 grid grid-cols-2 gap-4' > 
        {AccordionDate.map((item) =>{
            return(
            <div key={item.id} className='border-b border-b-gray-500 bg space-y-3'>
                <div className='flex justify-between'onClick={() => (handleToggle(item.id))}>
                    <h2 className='text-2xl'>{item.title}</h2>
                <span className='text-2xl'>+</span> 
                </div> 
               {OpenId == item.id ? (<div>
                {item.description}
              </div>):null
              }
              </div>
        )})}

    </div>
  </section>
  )
}

export default Accordion