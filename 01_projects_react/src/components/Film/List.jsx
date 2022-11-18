import { useState } from "react";
import { useFetchData } from "./../useFetchData";
import { Link, Outlet } from "react-router-dom";
import './style/list.css'

export function List() {
    const [search, setSearch] = useState('')
    const { data, loading, error, fetchData, setData } = useFetchData(search)

    return (
        <div className="container">
            <h1>Film
                <span style={{ color: 'red' }}>
                    X
                </span>
            </h1>
            <div className="inputs">
                <input
                    type='text'
                    placeholder="Search a movie"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}>
                </input>
                <div className="buttons">
                    <button onClick={() => fetchData(search).then(setSearch(''))}>
                        Search
                    </button>
                    <button onClick={() => setData(null)}>
                        <Link className="resetted" to={'/'}>
                            Reset
                        </Link>
                    </button>
                </div>
            </div>
            {loading && <p>Loading..</p>}
            {error && <p>error.message</p>}
            <div className="inner-container">
                {data && data.Search.map((item, index) =>
                    item.Poster !== 'N/A' &&
                    <div className="card" key={index}>
                        <Link to={'/film/' + item.imdbID}>
                            <img
                                className="poster"
                                src={item.Poster}
                                alt={`${item.Title} poster`} 
                            />
                            <h4>{item.Title}</h4>
                        </Link>
                    </div>
                )}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}