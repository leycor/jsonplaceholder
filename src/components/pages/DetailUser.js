import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import ContentPost from '../atoms/ContentPost'
import ContentUsers from '../atoms/ContentUsers'
import TitleSection from '../atoms/TitleSection'
import { DataContext } from '../hooks/DataContext'

const DetailUser = () => {

    useEffect(() => {

        window.scrollTo({top:0,  behavior: 'smooth'})

    }, [])
    
    const {id} = useParams()
    const {users, posts} = useContext(DataContext)
    const detailUser = users.find( user => user.id === parseInt(id))
    const postsUser = posts.filter( post => post.userId.id === detailUser.id)

    return (
        <div className='container mx-auto px-5'>
            <TitleSection title='Detail User' />
            <ContentUsers key={id} id={id} name={detailUser.name} email={detailUser.email} phone={detailUser.phone} website={detailUser.website} />
            {
                postsUser.map( ({id, userId, title, body}) => <ContentPost key={id} id={id} userId={userId} title={title} body={body} />)
            }
        </div>
    )
}

export default DetailUser
