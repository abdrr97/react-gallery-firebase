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
      <p>{error && error}</p>
      <form className='mb-5'>
        <label htmlFor='image'>Image</label>
        <input
          className='form-control'
          multiple={false}
          id='image'
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

      <div className='album py-5 '>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {data &&
              data.map(({ docId, url }) => {
                return (
                  <div key={docId} className='col shadow-sm'>
                    <img
                      height='100%'
                      width='100%'
                      className='bd-placeholder-img card-img-top'
                      src={url}
                      alt='test'
                    />
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
