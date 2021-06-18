import React, { useEffect } from 'react';
import { fetchSWAPI } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { setStarships } from '../../redux/starshipsSlice';

function Starships() {
    const starships = useSelector(state => state.starships);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("mounting starships")
        fetchSWAPI("starships")
            .then(data => dispatch(setStarships(data)))

        return () => {
            console.log("unmounting starships")
        }
    }, [])

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