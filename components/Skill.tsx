import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
    directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='flex cursor-pointer'>
        <Link href="https://www.typescriptlang.org/docs/">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ 
                    opacity: 1,
                    x: 0
                }}
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="" 
                className='rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
        </Link>


    </div>
  )
}

export default Skill