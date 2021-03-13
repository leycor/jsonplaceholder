import React, { useEffect, useMemo, useState } from 'react'
import TitleSection from '../atoms/TitleSection'

// helpers

// Atoms
import ContentPost from '../atoms/ContentPost'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    // Enviar petición al cargar el componente

    // const getPosts = async() => {
    //     let newPosts = []
    //     const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        
    // }
    
     
   useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data.forEach(post => {
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(r => r.json())
                .then(usuario => {
                    post.userId = usuario.name;
                    setPosts(oldPosts => [...oldPosts, post])
                });
        }))
        setLoading(false);

        return 
    }, []);
    

    return(
        <section className='container px-10 mx-auto'>
            <TitleSection title='Posts List' />
            {
                loading
                ? ( <p className='p-2 bg-blue-400 text-white text-center font-medium'>Loading data...</p> )
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