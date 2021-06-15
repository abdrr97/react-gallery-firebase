import React from 'react'
import { GalleryProvider } from './context'
import Form from './components/Form'
import Header from './components/Header'

export const App = () => {
  return (
    <main className='container'>
      <GalleryProvider>
        <Header />
        <Form />
      </GalleryProvider>
    </main>
  )
}
