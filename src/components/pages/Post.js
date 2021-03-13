import React, { Fragment, useState } from 'react'

const Post = () => {

    const [counter, setcounter] = useState(0)

    const handleClick = () =>{
        setcounter(counter + 1)
        console.log('Aumenté el contador en el detalle')
    }

    return(
        <Fragment>
            <h1>Detalle de post</h1>
            <p>{counter}</p>
            <button onClick={ handleClick } className='p-2 border border-gray-200'>Contador</button>
        </Fragment>
    );
}

export default Post