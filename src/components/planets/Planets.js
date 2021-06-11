import React, { useState, useEffect } from 'react';
import { fetchSWAPI } from '../utils';

export default function Planets() {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        console.log("mounting planets")
        fetchSWAPI("planets")
            .then(({results}) => setPlanets(results))

        return () => {
            console.log("unmounting planets")
            setPlanets([])
        }
    }, [])

    // componentDidMount + componentDidMount
    useEffect(() => {
        console.log("updating planets")
    }, [planets])

    return (
        <div>
            <h1>All Planets</h1>
            <ul>
                {planets.map((p, i) => <li key={i}>{p.name}</li>)}
            </ul>
        </div>
    );
};