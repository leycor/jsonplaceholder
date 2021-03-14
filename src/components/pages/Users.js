import React, { Fragment, useEffect, useState } from 'react'
import ContentUsers from '../atoms/ContentUsers'
import TitleSection from '../atoms/TitleSection'

const Users = () => {

    const [users, setUsers] = useState([])
    const [loadin, setLoadin] = useState(true)

    // Enviar petición al cargar el componente
    const getUsers = async() => {

        // Posts
        const respUsers = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const dataUsers = await respUsers.json()
        setUsers(dataUsers)
        setLoadin(false)

    }

    useEffect(() => {
        getUsers()
    }, [])
    return(
        <Fragment>
            <TitleSection title='Lista de usuarios' />
            <section className='container px-10 mx-auto grid md:grid-cols-3 gap-2'>
            {
                loadin ?  <p className='p-2 bg-blue-400 text-white text-center font-medium w-100'>Loading users...</p>
                : users.map(({id, name, email, phone, website}) => <ContentUsers key={id} name={name} email={email} phone={phone} website={website} /> )
            }
            </section>
        </Fragment>
    );
}

export default Users