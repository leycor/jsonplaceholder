import React from 'react'
import { Link} from 'react-router-dom'

const ContentPost = ({id, userId, title, body}) => (

    <div className='flex flex-col border-b border-gray-400 py-5 mb-10'>
        <p className='font-bold text-sm text-gray-700 uppercase'>{ title }</p>
        <Link to={`/users/${userId.id}`} className='text-sm font-medium text-red-700 italic mb-3 hover:text-red-600'><span className='mr-1 font-normal'>Autor:</span>{ userId.name }</Link>
        <p className='text-gray-700 text-base mb-4'>{ body }</p>
        {
            id && <Link to={`/posts/${id}`} className='ml-auto text-sm text-red-700 border border-gray-600 py-1 px-4 hover:bg-gray-100'>Ir a detalles</Link>
        }
    </div>
)
export default ContentPost
