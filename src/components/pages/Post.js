import React, { Fragment, useEffect, useState } from 'react'
import ContentPost from '../atoms/ContentPost';

import { useParams } from 'react-router-dom'

// Atoms
import TitleSection from '../atoms/TitleSection';
import ComentaryPost from '../atoms/ComentaryPost';

const Post = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    const postId = useParams();
    console.log('Me estoy llamando')

    // Enviar petición al cargar el componente
    const getPost = async() => {

        // Posts
        const respPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}`)
        const dataPost = await respPost.json()
        
        //coments
        const respComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${dataPost.id}/comments`)
        const dataComments = await respComments.json()
        setComments(dataComments)


        // Users
        const respUser = await fetch(`https://jsonplaceholder.typicode.com/users/${dataPost.userId}`)
        const dataUser = await respUser.json()
        dataPost.userId = dataUser.name
        setPost(dataPost)
        setLoading(false)
    }

    useEffect(() => {
        getPost();
    }, [])

    return(
        <section className='container px-10 mx-auto'>
            <TitleSection title='Post Detail' />
            {
                loading
                ? ( <p className='p-2 bg-blue-400 text-white text-center font-medium'>Loading posts...</p> )
                : 
                (
                    <Fragment>

                        <ContentPost
                        key={post.id}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                        />

                        {
                            comments.map( ({id, name, email, body}) => <ComentaryPost key={id} name={name} email={email} body={body} />)
                        }

                    </Fragment>
                )
            }
        </section>
    );
}


export default Post