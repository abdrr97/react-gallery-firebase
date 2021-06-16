import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ setSelectedImage, url }) => {
  // document.body.style.background = `url('${selectedImage}')`
  // document.body.style.backgroundSize = 'cover'
  // document.body.style.backgroundPosition = 'center'
  // document.body.style.backgroundRepeat = 'no-repeat'

  return (
    <>
      <motion.article layout whileHover={{ opacity: 1 }} className='img-wrap'>
        <motion.img
          onClick={() => setSelectedImage(url)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          layout
          className='image'
          src={url}
          alt='test'
        />
      </motion.article>
    </>
  )
}

export default Card
