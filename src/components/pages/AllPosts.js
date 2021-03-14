import React, { useContext, useEffect } from 'react'
import TitleSection from '../atoms/TitleSection'

import ContentPost from '../atoms/ContentPost'
import { DataContext } from '../hooks/DataContext'

const AllPosts = () => {
    
    const { posts } = useContext(DataContext)

    useEffect(() => {

        window.scrollTo({top:0, behavior: 'smooth'})

    }, [])

    return (
        <div className='container mx-auto px-5'>
            <TitleSection title='All Posts' />
            {
                posts.map( ({id, userId,title, body}) => <ContentPost key={id} id={id} userId={userId} title={title} body={body} />)
            }
        </div>
    )
}

export default AllPosts
