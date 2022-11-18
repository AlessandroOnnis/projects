import { useState } from "react";

export function useFetchData(value, i) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        const end = '&apikey=42f82aeb'
        if (value !== null && value !== '') {
            setLoading(true)
            try {
                const response = await fetch(`https://www.omdbapi.com/?${i ? 'i=' : 's='}${value}${end}`)
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