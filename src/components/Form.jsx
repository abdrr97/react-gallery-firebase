import React, { useContext, useState } from 'react'
import { GalleryContext } from '../context'
import ImageGrid from './ImageGrid'

const Form = () => {
  const { uploadFile, error, progress } = useContext(GalleryContext)
  const [file, setFile] = useState(null)

  const changeHandle = (e) => {
    const _selectedFile = e.target.files[0]
    if (_selectedFile) {
      setFile(_selectedFile)
      uploadFile(_selectedFile)
    } else {
      setFile(null)
    }
  }

  return (
    <>
      <form>
        <label>
          <input multiple={false} type='file' onChange={changeHandle} />
          <span>+</span>
        </label>
      </form>

      <div className='output'>
        <p>{error && <div className='error'>{error}</div>}</p>
        <p>{file && <div>{file.name}</div>}</p>
        <p>
          {file && (
            <div className='progress-bar' style={{ width: progress + '%' }}>
              {progress.toFixed(1) + '%'}
            </div>
          )}
        </p>
      </div>
    </>
  )
}

export default Form
