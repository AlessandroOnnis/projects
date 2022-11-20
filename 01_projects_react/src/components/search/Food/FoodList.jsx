import { useState } from "react";
import { useFetchData } from "../../useFetchData";
import { Link, Outlet } from "react-router-dom";
import { ProductCard } from "../Products/ProductCard";
import { Wrapper } from "../../GeneralComponents/Wrapper";

export function FoodList({ placeholder, redirect, argument }) {
    const [search, setSearch] = useState('')
    const { data, loading, error, fetchData, setData } = useFetchData(search, false, argument)

    return (
        <Wrapper extClass={"container"}>
            <Wrapper chooseClass extClass={"container-internal"}>
                <div className="head">
                    <h1 className="title">Food
                        <span>Factory</span>
                    </h1>
                    <div className="inputs">
                        <input
                            type='text'
                            placeholder={placeholder}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}>
                        </input>
                        <div className="buttons">
                            <button onClick={() => fetchData(search).then(setSearch(''))}>
                                Search
                            </button>
                            <button onClick={() => setData(null)}>
                                <Link className="resetted" to={redirect}>
                                    Reset
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="managing">
                        {loading && <p>Loading..</p>}
                        {error && <p>error.message</p>}
                    </div>
                </div>
                <Wrapper chooseClass extClass={"inner-container"}>
                    {data && data.meals.map((item, index) =>
                        item.strMealThumb !== 'N/A' &&
                        <ProductCard
                            type={'card-b'}
                            key={index}
                            endpoint={/food/+item.idMeal}
                            img={item.strMealThumb}
                            title={item.strMeal}
                            posterType={'poster-b'} />
                    )}
                </Wrapper>
            </Wrapper>
            <div className="outlet">
                <Outlet />
            </div>
        </Wrapper>
    )
}