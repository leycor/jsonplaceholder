import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    // Estado que almacenará la data
    const [state, setState] = useState([]);

    // Función que hace la petición Get
    const getData = async( url ) => {
        const response = await fetch(url)
        const data = await response.json()
        setState( data )
    }

    // Efecto que se ejecutará cada vez que la url cambie
    useEffect(() => {
        getData( url )

    }, [url])

    return state;
}