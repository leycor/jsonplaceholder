import React, { Fragment, useContext, useEffect } from 'react'
import ContentUsers from '../atoms/ContentUsers'
import TitleSection from '../atoms/TitleSection'
import { DataContext } from '../hooks/DataContext'

const AllUsers = () => {

    const { users } = useContext(DataContext)

    useEffect(() => {

        window.scrollTo({top:0,  behavior: 'smooth'})

    }, [])
    return (
        <Fragment>

            <TitleSection title='All Users' />
            <div className='container mx-auto px-5 grid gap-4 md:grid-cols-3'>
                {
                    users.map( ({id, name, email, phone, website}) => 
                        <ContentUsers 
                        key={id} 
                        id={id} 
                        name={name} 
                        email={email} 
                        phone={phone} 
                        website={website} 
                        />
                    )
                }
            </div>
        </Fragment>
    )
}

export default AllUsers
