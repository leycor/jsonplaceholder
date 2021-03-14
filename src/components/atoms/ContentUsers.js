import React from 'react'

const ContentUsers = ({name, email, phone, website}) => (
    <div className='flex  flex-col items-center justify-center h-36 flex-wrap border border-gray-2'>
        <p className='font-medium text-base'>{name}</p>
        <p className='text-sm font-medium text-gray-600'>{email}</p>
        <p className='text-sm font-medium text-gray-600'>{phone}</p>
        <p className='text-sm font-medium text-gray-600'>{website}</p>
    </div>
)

export default ContentUsers
