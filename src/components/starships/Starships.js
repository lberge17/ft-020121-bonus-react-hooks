import React, { useState } from 'react';
import StarshipCard from './StarshipCard';
import { fetchSWAPI } from '../utils';

function Starships() {
    const [starships, setStarships] = useState([])

    return (
        <div>
            <h1>All Starships</h1>
            <ul>
                {starships.map((s, idx) => <StarshipCard key={idx} {...s} /> )}
            </ul>
        </div>
    );
}
 
export default Starships;