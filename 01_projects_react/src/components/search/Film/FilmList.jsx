import { useState } from "react";
import { useFetchData } from "../../useFetchData";
import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "../../GeneralComponents/Wrapper";
import { Card } from "../../GeneralComponents/Card";
import './../style/list.scss'

export function FilmList({ placeholder, redirect, argument }) {
    const [search, setSearch] = useState('')
    const { data, loading, error, fetchData, setData } = useFetchData(search, false, argument)

    return (
        <Wrapper extClass={"container"}>
            <Wrapper chooseClass extClass={"container-internal"}>
                <div className="head">
                    <h1 className="title">Film
                        <span>Chooser</span>
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
                    {data && data.Search.map((item, index) =>
                        item.Poster !== 'N/A' &&
                        <Card 
                            type={'card'}
                            key={index}
                            endpoint={'/film/'+item.imdbID}
                            img={item.Poster}
                            title={item.Title}
                            posterType={'poster'}/>
                        )}
                </Wrapper>
            </Wrapper>
            <div className="outlet">
                <Outlet />
            </div>
        </Wrapper>
    )
}