import React, { useEffect, useState } from 'react'
import TitleSection from '../atoms/TitleSection'

// helpers

// Atoms
import ContentPost from '../atoms/ContentPost'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    // Enviar petición al cargar el componente
    const getPosts = async() => {

        // Posts
        const respPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataPosts = await respPosts.json()

        // Users
        const respUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUsers = await respUsers.json()

        dataPosts.map( post => {
            const userName = dataUsers.find( user => user.id === post.userId)
            post.userId = userName.name
            return setPosts(posts => [...posts, post])
        })
        setLoading(false)

    }

    useEffect(() => {
        getPosts()
    },[])

    return(
        <section className='container px-10 mx-auto'>
            <TitleSection title='Posts List' />
            {
                loading
                ? ( <p className='p-2 bg-blue-400 text-white text-center font-medium'>Loading posts...</p> )
                : 
                (
                    
                    posts.map( ({id, userId, title, body}) => 
                        <ContentPost
                        key={id}
                        id={id}
                        userId={userId}
                        title={title}
                        body={body}
                        /> 
                    )
                )
            }
            
        </section>
    );
}

export default Posts