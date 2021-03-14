import React, { useContext, useEffect } from 'react'
import TitleSection from '../atoms/TitleSection'

import ContentPost from '../atoms/ContentPost'
import { DataContext } from '../hooks/DataContext'
import { useParams } from 'react-router'
import ComentaryPost from '../atoms/ComentaryPost'

const DetailPost = () => {

    const { id } = useParams()
    const { posts, comments } = useContext(DataContext)

    useEffect(() => {

        window.scrollTo({top:0,  behavior: 'smooth'})

    }, [])

    const detailPost = posts.find( post => post.id === parseInt(id))
    const comentaryPost = comments.filter( comment => comment.postId === detailPost.id)
    return (
        <div className='container mx-auto px-5'>
            <TitleSection title='Detail Post' />
            <ContentPost title={detailPost.title} body={detailPost.body} userId={detailPost.userId} />
            {
                comentaryPost.map( comentary => <ComentaryPost key={comentary.id} name={comentary.name} email={comentary.email} body={comentary.body} />)
            }
        </div>
    )
}

export default DetailPost
