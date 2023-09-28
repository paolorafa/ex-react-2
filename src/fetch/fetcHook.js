import {useEffect, useState} from "react";


const useFetch = (url, ) => {
    
    const [dataBook, setDataBook] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            setDataBook(data)
            setIsLoading(false)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getData()
    }, [url]);

    return { dataBook, isLoading, error, setDataBook }
}

export default useFetch;