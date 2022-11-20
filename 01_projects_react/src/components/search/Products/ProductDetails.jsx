import { useEffect } from "react"
import { useFetchData } from "../../useFetchData"
import { useParams } from "react-router-dom"
import { Wrapper } from "../../GeneralComponents/Wrapper"
import './../style/details.scss'

export function ProductDetails({argument}) {
    const { id } = useParams()
    const { data, fetchData } = useFetchData(id, true, argument)

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        argument === 'food'
        ?
        data &&
        <div className="product-choosen">
            <img className="product-image" src={data.meals[0].strMealThumb} alt={`${data.meals[0].strMeal} poster`} />
            <Wrapper extClass={"product-data"}>
                <div>
                    <h1>{data.meals[0].strMeal}</h1>
                    <h3>cucina: {data.meals[0].strArea}</h3>
                </div>
                <div>
                    <h3>category: {data.meals[0].strCategory}</h3>
                    <p>Instruction: {data.meals[0].strInstructions}</p>
                </div>
            </Wrapper>
        </div>
        :
        data &&
        <div className="product-choosen">
            <img src={data.Poster} alt={`${data.Title} poster`} />
            <Wrapper extClass={"product-data"}>
                <div>
                    <h1>{data.Title}</h1>
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