import React, { useContext, useState } from 'react'
import { GalleryContext } from '../context'

const Form = () => {
  const { uploadFile, error, data, progress } = useContext(GalleryContext)
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

      <div className='progress'>
        <div
          className='progress-bar'
          role='progressbar'
          style={{ width: progress + '%' }}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>

      {data &&
        data.map(({ docId, url }) => {
          return <img width='100' key={docId} src={url} alt='test' />
        })}
    </>
  )
}

export default Form
