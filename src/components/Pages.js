import React, { useState } from 'react';
import About from './About';
import Characters from './characters/Characters';
import Planets from './planets/Planets';
import Starships from './starships/Starships';

export default function Pages(){
    const [page, setPage] = useState('about')

    function renderPage(){
        switch (page) {
            case "characters":
                return <Characters />;

            case "starships":
                return <Starships />;

            case "planets":
                return <Planets />;
        
            default:
                return <About />;
        }
    }
    return(
        <div>
            <nav>
                <button onClick={() => setPage("about")}>About</button>
                <button onClick={() => setPage("characters")}>Characters</button>
                <button onClick={() => setPage("starships")}>Starships</button>
                <button onClick={() => setPage("planets")}>Planets</button>
            </nav>
            {renderPage()}
        </div>
    )
};