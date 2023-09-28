import { useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error ,setError] = useState('');
    const [isLoading ,setIsLoading] = useState(false);

    function refetch({params}) {
        setIsLoading(true)
        fetch(`${url}?_limit=${params._limit}`)
        .then(data => data.json()
            .then(data => {
                setIsLoading(false)
                setData(data)})
        )
        .catch(error => {
            setIsLoading(false)
            setError(error)})
    }

    return {
        data,
        error,
        isLoading,
        refetch,
    }
    
}