import React from 'react'

const ComentaryPost = ({name, email, body}) => (

    <div className='bg-gray-100 p-5 mb-4'>
        <p className='font-medium text-sm text-gray-800 capitalize italic mb-1'>{name}</p>
        <p className='font-normal text-sm text-gray-700 italic mb-4'>{email}</p>
        <p className='text-gray-700 italic'>{body}</p>
    </div> 
)
export default ComentaryPost
