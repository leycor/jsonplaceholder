import React, { Fragment, useEffect, useState } from 'react'
import { DataContext } from '../hooks/DataContext';
import MainRouter from '../Router/MainRouter';

const MainApp = () => {

    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async() => {
        const respPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataPosts  = await respPosts.json()

        const respUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUsers  = await respUsers.json()
        setUsers(dataUsers)

        dataPosts.forEach( post => {
            const userName = dataUsers.find( user => user.id === post.userId)
            post.userId = userName
        })
        setPosts(dataPosts)

        const respComments = await fetch('https://jsonplaceholder.typicode.com/comments')
        const dataComments  = await respComments.json()
        setComments(dataComments)


        setLoading(false)
    }

    useEffect(() => {
        getData()
    },[])

    return(
        <Fragment>
            {
                !loading ? (
                <DataContext.Provider value = {{posts, users, comments}}>
                    <MainRouter />
                </DataContext.Provider>
                )
                : <div className='flex justify-center items-center h-screen'><p className='text-gray-700 font-medium'>Cargando</p></div>
            }
        </Fragment>
    );
}

export default MainApp