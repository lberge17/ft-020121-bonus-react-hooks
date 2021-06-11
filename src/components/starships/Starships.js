import React, { useState, useEffect } from 'react';
import { fetchSWAPI } from '../utils';

function Starships() {
    const [starships, setStarships] = useState([])

    // componentDidMount
    useEffect(() => {
        console.log("mounting starships")
        fetchSWAPI("starships")
            .then(data => setStarships(data.results))

        // componentWillUnmount
        return () => {
            console.log("unmounting starships")
            setStarships([])
        }
    }, [])

    // componentDidUpdate + componentDidMount
    useEffect(() => {
        console.log("updating starship")
    }, [starships])

    return (
        <div>
            <h1>All Starships</h1>
            <ul>
                {starships.map((s, idx) => <li key={idx}>{s.name}</li>)}
            </ul>
        </div>
    );
}
 
export default Starships;