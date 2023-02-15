import React from 'react'

export default function Search({searchChange}) {
  return (
    <div className='mb3'>
        <input type="text" className='pa2 bg-lightest-blue' placeholder='Search your favourite Robot...'
        onChange={searchChange}/>
    </div>
  )
}
