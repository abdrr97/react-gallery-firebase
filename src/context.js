import React, { useState, useEffect, createContext } from 'react'
import { db, storage, timestamp } from './firebase/config'

const GalleryContext = createContext()

const GalleryProvider = ({ children }) => {
  const values = {}
  return <GalleryContext.Provider value={values} children={children} />
}

export { GalleryContext, GalleryProvider }
