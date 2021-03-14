import React from 'react'
import { Link } from 'react-router-dom'

const ContentUsers = ({id,name, email, phone, website}) => (

    <div className='flex  flex-col items-center justify-center h-36 flex-wrap border border-gray-2 mb-5'>
        <Link to={`/users/${id}`} className='font-medium text-red-700 hover:text-red-600 text-base'>{name}</Link>
        <p className='text-sm font-medium text-gray-600'>{email}</p>
        <p className='text-sm font-medium text-gray-600'>{phone}</p>
        <p className='text-sm font-medium text-gray-600'>{website}</p>
    </div>

)

export default ContentUsers
