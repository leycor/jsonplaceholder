import React from 'react'
import { Link } from 'react-router-dom'

const ContentPost = ({id, userId, title, body, link}) => (

    <div className='flex flex-col border-b border-gray-400 py-5'>
        <p className='font-bold text-sm text-gray-700 uppercase'>{ title }</p>
        <p className='text-sm text-gray-800 italic mb-3'><span className='mr-1'>Autor:</span>{ userId }</p>
        <p className='text-gray-700 text-base mb-4'>{ body }</p>
        <Link to={`posts/${id}`} className='ml-auto text-sm border border-gray-600 py-1 px-4 hover:bg-gray-100'>Ir a detalles</Link>
    </div>
)
export default ContentPost
