import React from 'react'
import { motion } from 'framer-motion'


type Props = {
  project:any
}

function Project({project}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
      <motion.img
          initial={{
              y: -300,
              opacity: 0
          }} 
          transition={{ duration: 1.2 }}
          whileInView={{
              opacity: 1,
              y: 0
          }}
          viewport={{ once: true }}
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="" 
      />

      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
          <h4 className='text-xl font-semibold text-center'>
              Poptalk
          </h4>
          <p className='text-lg text-center md:text-justify'>
              Build Bucket Lists from social media of the places you want to visit and discover new places. Start a conversation, interact and go explore.
          </p>
      </div>
    </div>
  )
}

export default Project