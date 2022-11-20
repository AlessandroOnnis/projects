import { useState } from "react";

export function useFetchData(value, id, argument) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        let url;
        if(argument === 'film')url= `https://www.omdbapi.com/?${id ? 'i=' : 's='}${value}&apikey=42f82aeb`
        if(argument === 'food')url= `https://www.themealdb.com/api/json/v1/1/${id?`lookup.php?i=${value}`:`search.php?s=${value}`}`
        if (value !== null && value !== '') {
            setLoading(true)
            try {
                const response = await fetch(url)
                response.status !== 200 && setError(new Error('something it\'s gone wrong'))
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
    }
    return {
        data,
        error,
        loading,
        fetchData,
        setData
    }
}