import React, { useEffect, useMemo, useState } from 'react'
import TitleSection from '../atoms/TitleSection'

// helpers

// Atoms
import ContentPost from '../atoms/ContentPost'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    // Enviar petición al cargar el componente
    
    const getUserId = async(id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        return data.name
    }
    
    const getFetch = async( ) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataPosts = await response.json()
        return dataPosts
    }
    
    useEffect(() => {
        console.log( getUserId(1) )
    },[])

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