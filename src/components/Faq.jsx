import React, { useState } from 'react'
import { FAQ_ITEM_LIST } from '../utils/helper'

const Faq = () => {
    const [value, setValue] = useState();
    const handler = (index) => (
        setValue(value===index ? "" : index )
    )
  return (
      <div>
          <h1 className='text-center text-5xl max-lg:text-3xl mb-10'>FAQ</h1>
          <div className='faq-parent'>
              {FAQ_ITEM_LIST.map((obj, i) => (
                  <div key={i} className='max-w-[522px] mx-auto border border-solid  p-4 rounded-xl mb-3'>
                  <div onClick={()=>handler(i)}   className='flex items-center justify-between'>
                      {obj.title} 
                          <p >{value === i ? "-" : "+"}</p>
                      </div>
                      <div className={`${value === i ? "max-h-32  ":"max-h-0"} transition-all ease-in-out duration-700 sm:overflow-hidden overflow-auto`}>
                          <p>{obj.discription}</p>
                      </div>
                      </div>
              ))}
              
          </div>
    </div>
  )
}

export default Faq