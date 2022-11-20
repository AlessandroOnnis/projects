import { useEffect } from "react"
import { useFetchData } from "../../useFetchData"
import { useParams } from "react-router-dom"
import { Wrapper } from "../../GeneralComponents/Wrapper"

export function FoodDetails() {
    const { id } = useParams()
    const { data, fetchData } = useFetchData(id, true, 'food')

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        data &&
        <div className="product-choosen">
            <img className="product-image" src={data.meals[0].strMealThumb} alt={`${data.meals[0].strMeal} poster`} />
            <Wrapper extClass={"product-data"}>
                <div>
                    <h1 style={{ color: 'red' }}>{data.meals[0].strMeal}</h1>
                    <h3>cucina: {data.meals[0].strArea}</h3>
                </div>
                <div>
                    <h3>category: {data.meals[0].strCategory}</h3>
                    <p>Instruction: {data.meals[0].strInstructions}</p>
                </div>
            </Wrapper>
        </div>
        
    )
}