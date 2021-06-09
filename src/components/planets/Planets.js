import React, { useState } from 'react';
import PlanetCard from './PlanetCard';
import { fetchSWAPI } from '../utils';

export default function Planets() {
    const [planets, setPlanets] = useState([])

    return (
        <div>
            <h1>All Planets</h1>
            <ul>
                {planets.map((p, idx) => <PlanetCard key={idx} {...p} /> )}
            </ul>
        </div>
    );
};