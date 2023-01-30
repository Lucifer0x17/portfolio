import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration: 1.5}}
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            viewport={{once:true}}
            src='/about.jpg' 
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover lg:rounded-lg lg:w-64 lg:h-95 xl:w-[500px] xl:h-[600px]' 
        />
        
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a{" "}<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background</h4>
            <p className="text-sm text-justify">
                I&apos;m Ayush. You might also know me as Lucifer0x17.eth! I&apos;m a young professional nearing the end of my Engineering in Information Technology. A MERN Stack developer with exceptional knowledge and skills in DSA and SQL. Currently Interning with Dell International Services. I&apos;m learning and educating me more about Web 3, and DevOps. I believe in furthering the cause of the Open-source community and want to built a solution to better the world throught it.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </motion.div>
  )
}

export default About