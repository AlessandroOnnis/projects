import { useEffect } from "react"
import { useFetchData } from "../../useFetchData"
import { useParams } from "react-router-dom"
import { Wrapper } from "../../GeneralComponents/Wrapper"
import './../style/details.scss'

export function FilmDetails() {
    const { id } = useParams()
    const { data, fetchData } = useFetchData(id, true, 'film')

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        data &&
        <div className="product-choosen">
            <img src={data.Poster} alt={`${data.Title} poster`} />
            <Wrapper extClass={"product-data"}>
                <div>
                    <h1 style={{ color: 'red' }}>{data.Title}</h1>
                    <h3>Year: {data.Year}</h3>
                </div>
                <div>
                    <h3>Genre: {data.Genre}</h3>
                    <p>{data.Plot}</p>
                    <p>Country: {data.Country}</p>
                </div>
            </Wrapper>
        </div>
    )
}