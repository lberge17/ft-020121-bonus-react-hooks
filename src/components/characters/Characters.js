import React, { useState, useEffect } from 'react';
import { fetchSWAPI } from '../utils';

export default function Characters() {
    const [characters, setCharacters] = useState([])

    // useEffect
    useEffect(() => {
        console.log("mounting characters")
        fetchSWAPI("people")
            .then(({results}) => setCharacters(results))
        
        return () => {
            console.log("unmounting characters")
            setCharacters([])
        }
    }, [])

    // componentDidUpdate + componentDidMount
    useEffect(() => {
        console.log("updating characters")
    }, [characters])

    return (
        <div>
            <h1>All Characters</h1>
            <ul>
                {characters.map((c, i) => <li key={i}>{c.name}</li>)}
            </ul>
        </div>
    );
};