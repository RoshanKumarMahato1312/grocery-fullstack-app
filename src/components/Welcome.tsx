'use client'
import React from 'react'
import { motion } from "motion/react"
import { ArrowRight, Bike, ShoppingBasket } from 'lucide-react'
type propType={
  nextStep:(s:number)=>void
}

function Welcome({nextStep}:propType) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6 bg-linear-to-b from-blue-200 to-white'>
      <div>
        <motion.div
          initial ={{opacity:0,y:-10}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          className='flex items-center gap-3 justify-center'
        >
          <ShoppingBasket className='w-10 h-10 text-blue-500 '/>
          <h1 className='text-4-xl md:text-5xl font-extrabold text-blue-600'>
            Grocery Wallah
            
          </h1>
          
          </motion.div>
          <motion.p
          initial ={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          className='mt-4 text-gray-700 text-lg md:text-xl max-w-lg'
          >
            Your one-stop solution for all your grocery needs, delivering fresh produce and essentials right to your doorstep in just 10 minutes.
          </motion.p>
          
      </div>
      <motion.div
          initial ={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.5}}
          className='flex items-center gap-10 justify-center mt-10'
          >
            <ShoppingBasket className='w-24 h-24 md:w-32 md:h-32 text-blue-600 drop-shadow-md'/>
            <Bike className='w-24 h-24 md:w-32 md:h-32 text-red-400 drop-shadow-md'/>
          </motion.div>
          
          <motion.button
          initial ={{opacity:0,y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className='inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-2md transition all duration-200 mt-10' onClick={()=>nextStep(2)}
          >
            Next
            <ArrowRight className=''/>
          </motion.button>
    </div>
  )
}

export default Welcome