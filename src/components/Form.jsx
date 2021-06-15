import React, { useContext, useState } from 'react'
import { GalleryContext } from '../context'

const Form = () => {
  const { uploadFile, error } = useContext(GalleryContext)
  const [file, setFile] = useState(null)

  const changeHandle = (e) => {
    const _selectedFile = e.target.files[0]
    console.log(_selectedFile)
    if (_selectedFile) {
      setFile(_selectedFile)
      uploadFile(_selectedFile)
    } else {
      setFile(null)
    }
  }

  return (
    <>
      <h3>Form</h3>
      <p>{error && error}</p>
      <form>
        <label htmlFor='image'>Image</label>
        <input
          id='image'
          multiple={false}
          type='file'
          onChange={changeHandle}
        />
      </form>
    </>
  )
}

export default Form
