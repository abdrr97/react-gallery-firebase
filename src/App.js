import React from 'react'
import { GalleryProvider } from './context'
import Form from './components/Form'

export const App = () => {
  return (
    <GalleryProvider>
      <Form />
    </GalleryProvider>
  )
}
