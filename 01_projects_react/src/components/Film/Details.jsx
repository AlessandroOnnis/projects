import { useEffect } from "react"
import { useFetchData } from "./../useFetchData"
import { useParams } from "react-router-dom"
import './style/details.css'

export function Details() {
    const { id } = useParams()
    const { data, fetchData } = useFetchData(id, true)

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        data &&
        <div className="choosen">
            <img src={data.Poster} alt={`${data.Title} poster`} />
            <div className="choosen-data">
                <div>
                    <h1 style={{ color: 'red' }}>{data.Title}</h1>
                    <h3>Year: {data.Year}</h3>
                </div>
                <div>
                    <h3>Genre: {data.Genre}</h3>
                    <p>{data.Plot}</p>
                    <p>Country: {data.Country}</p>
                </div>
            </div>
        </div>
    )
}