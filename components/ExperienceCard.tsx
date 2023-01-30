import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src='https://www.freepnglogos.com/uploads/dell-png-logo/dell-png-logo-0.png'
        />
            <div className='px-0 md:px-10'>
                <h4 className='test-4xl font-light'>Software Enginner Intern</h4>
                <p className='font-bold text-2xl mt-1'>Dell Technologies</p>
                <div className='flex space-x-2 my-2'>
                    <motion.img 
                        className='h-10 w-10 rounded-full'
                        src="https://w7.pngwing.com/pngs/450/470/png-transparent-node-js-angularjs-react-javascript-npm-node-js-angle-text-trademark-thumbnail.png" alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work.... - Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary Post Summary Post Summary Post Summary Post Summary Post </li>
                    <li>Summary Post Summary Post Summary Post Summary Post Summary Post </li>
                    <li>Summary Post Summary Post Summary Post Summary Post Summary Post </li>
                    <li>Summary Post Summary Post Summary Post Summary Post Summary Post </li>
                    <li>Summary Post Summary Post Summary Post Summary Post Summary Post </li>
                </ul>

            </div>
    </article>
  )
}

export default ExperienceCard