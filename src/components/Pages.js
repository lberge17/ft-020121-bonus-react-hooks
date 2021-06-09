import React, { useState } from 'react';
import About from './About';
import Characters from './characters/Characters';
import Planets from './planets/Planets';
import Starships from './starships/Starships';

export default function Pages(){

    return(
        <div>
            <nav>
                <button>About</button>
                <button>Characters</button>
                <button>Starships</button>
                <button>Planets</button>
            </nav>
            <div>
                {/* Individual Page goes Here (About/Starships/etc.) */}
            </div>
        </div>
    )
};