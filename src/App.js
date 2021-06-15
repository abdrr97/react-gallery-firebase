import React from 'react'
import { GalleryProvider } from './context'
import Form from './components/Form'

export const App = () => {
  return (
    <main className='container'>
      <GalleryProvider>
        <Form />
      </GalleryProvider>
    </main>
  )
}
