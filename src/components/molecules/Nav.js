import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {

    return(
        <nav className='flex justify-between items-center flex-wrap px-5 md:px-14 h-12 w-full bg-black mb-10 sticky top-0'>
            <p className='font-medium text-sm text-white uppercase'>{`{ JSON } Placeholder`}</p>

            <div className='flex text-sm text-white font-medium capitalize'>
                <Link to='/'className='mr-3 hover:text-gray-200 cursor-pointer'>Post</Link>
                <Link to='/users'className='hover:text-gray-200 cursor-pointer'>Users</Link>
            </div>
        </nav>
    );
}

export default Nav