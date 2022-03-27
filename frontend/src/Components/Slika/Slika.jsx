import { motion } from 'framer-motion'
import React from 'react'




const Slika = ({stampa}) => {
  return (
    <div>
        <motion.img initial={{opacity:0}} animate={{opacity:1}} src={stampa } />
    </div>
  )
}

export default Slika