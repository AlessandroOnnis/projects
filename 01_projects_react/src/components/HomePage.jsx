import { useState } from "react";
import { Wrapper } from "./GeneralComponents/Wrapper";

const phrases = [
    {id: 1, task:'Complain', text:`Niente è come vorrei ma per ora questo è ciò che il tempo mi permette di fare`},
    {id: 2, task:'Fetch', text:`Attualmente ci sono solo due chiamate fetch, non son tantissimo ma è un inizio`},
    {id: 3, task:'Carousel', text:`Questo finto carousel infinito ha una logica semplice ma è veramente soddisfacente`},
]

export function HomePage() {
    const [data, setData] = useState(phrases)

function sinistra(){
setData([...data], phrases.push(phrases.shift()));
}
function destra(){
setData([...data],phrases.unshift(phrases.pop()))
}
    return (
        <Wrapper>
            <div className="carousel-container">
                <h1>Welcome</h1>
            <div className="carousel">
                <button className="left" onClick={sinistra}><i class="arrow left"></i></button>
                {phrases.map((item, index)=>
                    <div className='littleCard' key={index}>
                        <h2>#{item.id}</h2>
                        <h3>Task {item.task}</h3>
                        <p>{item.text}</p>
                    </div>
                )}
                <button className="right" onClick={destra}><i class="arrow right"></i></button>
            </div>
            </div>
        </Wrapper >
    )
}